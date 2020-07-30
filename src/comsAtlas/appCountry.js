import React,{useEffect,useState} from 'react'
import Main from './main';
import { doApiGetAllCountry } from '../servecis/apiServer';
function AppCountry() {
    const [all, setAll] = useState(false)
    useEffect(() => {
    doApiGetAllCountry("https://restcountries.eu/rest/v2/all")
    .then(data=>{
       // console.log(data);
        setAll(true)
    })
    }, [])
    return (
        <div>
           {all &&  <Main />}
        </div>
    )
}
export default AppCountry
