import React, { useRef } from 'react';
import { Link ,useHistory} from "react-router-dom"


function Nav(props) {
    let searchInput = useRef(null);
    let history = useHistory();

    const doSearch = () => {
        let searchQuery = searchInput.current.value;
        history.push("/country/"+searchQuery);
     
    }
    return (
        <nav className="container  bg-dark text-white p-2">
            <div className="row">
                <div className="col-lg-6 CountryName ">
                    <Link to="/">israel</Link>
                    <Link to="/country/United States of America">USA</Link>
                    <Link to="/country/United Kingdom">United Kingdom</Link>
                    <Link to="/country/France">France</Link>
                    <Link to="/country/Thailand">Thailand</Link>
                    {/* <Link to='/cat/clothing'>Clothing</Link> */}
                    
                </div>
                <div className="col-lg-6">

                
                    <input ref={searchInput} type="text"  className="form-control-sm" />
                    <button onClick={doSearch} className="btn btn-light btn-sm">Search</button>
                </div>
            </div>

        </nav>
    )
}

export default Nav