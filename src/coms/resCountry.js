import React, { useEffect, useState } from 'react'
import { doApiGet ,theCountryName} from '../servecis/apiServer';
import MyMap from '../MyMap';
import { Link } from "react-router-dom"


function ResCountry(props) {
    //let history = useHistory();
    const [Country, setCountry] = useState(null)
    // history.push("/country")
    useEffect(() => {
        let url = "https://restcountries.eu/rest/v2/name/israel"

        if (props.match) {
            if (props.match.params.name) {
                url = "https://restcountries.eu/rest/v2/name/" + props.match.params.name
            }
            if (props.match.params.codeId) {
              //  console.log("code")
                url = "https://restcountries.eu/rest/v2/alpha/" + props.match.params.codeId
            }
        }
        doApiGet(url)
            .then(data => {
               console.log(data);
               debugger
                if( props.match.params.codeId){
                    setCountry(data)
                }else
                setCountry(data[0])
            })
    }, [props.match])

    const  noResult=()=>{
        return <div className="countryouNoResult">
            No results <br/>
            Try searching for another country  <br/>
            or click on a country in the selection
        </div>
    }
    return (
        <div>
  
            {Country?" ":noResult()}
            {Country && <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 countryFlag">
                            {/* {Country.flag} */}
                            <img src={Country.flag} alt="flg" />
                        </div>
                        <div className="col-lg-6  countryInfo">
                            <br />
                            <div>population: {Country.population}</div>
                            <div>region: {Country.region}</div>
                            <div>languages {Country.languages[0].name}</div>
                            <div>coins: {Country.currencies[0].code} ,{Country.currencies[0].name}  ,{Country.currencies[0].symbol}</div>
                            <div>capital: {Country.capital}</div>
                            <div></div>
                        </div>
                    </div>
                    {/* <br /> */}
                    <div className="row">
                        <div className="col-lg-6 countryMap">
                            <MyMap lat={Country.latlng[0]} lng={Country.latlng[1]} />
                        </div>
                        <div className="col-lg-6  countryBorders">
                            <br />
                            Borders Country:
                            <br />
                             {Country.borders.map((item,index)=>{
                                 return<div key={item}>
                                    <Link to={`/code/${item}`}>{theCountryName(item)}</Link> <br />
                                 </div>
                             })}
            
                        </div>
                    </div>
                    {/* {Country.latlng[0]} ----   {Country.latlng[1]} */}
                    <br />

                </div>

            </div>
            }
        </div>
    )
}

export default ResCountry


/**
 * data[0].capital
 * data[0].population
 * data[0].region
 * data[0].languages[0].name  data[0].languages[1].name  is arry
 * data[0].flag  image flag
 data[0].currencies[0] {code: "ILS", name: "Israeli new shekel", symbol: "₪"}


 data[0].borders=(4) ["EGY", "JOR", "LBN", "SYR"]

 data[0].latlng[0]
31.5
data[0].latlng[1]
34.75
 */