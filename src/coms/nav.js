import React, { useRef } from 'react';
import { Link, useHistory } from "react-router-dom"


function Nav(props) {
    let searchInput = useRef(null);
    let history = useHistory();

    const doSearch = () => {
        let searchQuery = searchInput.current.value;
        if(searchQuery.length>2)
        history.push("/country/" + searchQuery);
        else alert("The name of the country is short")

    }
    return (
        <div>

        {/* <nav className="container  bg-dark text-white p-2" >
            <div className="row">
                <div className="col-lg-3 myName ">
                    <span > Meir Atlas</span>
                </div>
                <div className="col-lg-6 CountryName ">

                    <Link to="/">israel</Link>
                    <Link to="/country/United States of America">USA</Link>
                    <Link to="/country/United Kingdom">United Kingdom</Link>
                    <Link to="/country/France">France</Link>
                    <Link to="/country/Thailand">Thailand</Link>
                </div>
                <div className="col-lg-3 CountrySerch ">


                    <input ref={searchInput} type="text" className="form-control-sm" />
                    <button onClick={doSearch} className="btn btn-light btn-sm">Search</button>

                </div>
            </div>

        </nav> */}












        <nav className="  p-1 navbar-dark bg-dark " >
                <div className="row">
                    <div className="col-lg-2 myName ">
                        <span > Meir Atlas</span>
                    </div>
                    <div className="col-lg-6 CountryName ">

                        <Link to="/">Israel</Link>
                        <Link to="/country/United States of America">USA</Link>
                        <Link to="/country/United Kingdom">United Kingdom</Link>
                        <Link to="/country/France">France</Link>
                        <Link to="/country/Thailand">Thailand</Link>
                    </div>
                    <div className=" col-lg-4  CountrySerch  text-align-right form-inline ">
                        <input ref={searchInput} className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={doSearch} className="btn btn-outline-primary my-2 my-sm-0">Search</button>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav

//style={{ backgroundColor: "lightseagreen" }}