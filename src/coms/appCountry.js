import React from 'react'
import Main from './main';
function AppCountry() {
    
    return (
        <div>
         <Main/>
        </div>
    )
}

export default AppCountry



// <Route exact path={["/","/page/:pageNum", "/graph","/cat/:catId", "/cat/:catId/:pageCatNum", "/search/:qsearch","/login_admin"]} render={() => {
//     return (
//       <div className="sticky-top">
//       {/* <React.Fragment> */}
//         <Header /><Nav />
//       {/* </React.Fragment> */}
//       </div>
//       )
//   }
// } />