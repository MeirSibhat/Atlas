import React ,{useEffect}from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ResCountry from './resCountry';
import Nav from './nav';
import Header from './header';
function Main() {
    return (
        <div>
            <Router>
                <Route  path="/" component={Header} />
                <Route  path="/" component={Nav} />
                <Route exact path="/" component={ResCountry} />
                <Route exact path="/country" component={ResCountry} />
                <Route exact path="/country/:name" component={ResCountry} />
                <Route exact path="/code/:codeId" component={ResCountry} />
                {/* <Switch> */}
                    {/* <Route exact path="/country" component={ResCountry} /> */}
      
                {/* </Switch> */}
            </Router>
        </div>
    )
}

export default Main

/**
 * data[0].capital
 * data[0].population
 * data[0].region
 * data[0].languages[0].name  data[0].languages[1].name  is arry
 * data[0].flag  image flag
 data[0].currencies[0] {code: "ILS", name: "Israeli new shekel", symbol: "₪"}


 data[0].borders=(4) ["EGY", "JOR", "LBN", "SYR"]
 */