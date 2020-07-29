import React, { useEffect } from 'react'
//import tt from '@tomtom-international/web-sdk-services'
import tt from '@tomtom-international/web-sdk-maps';
/*
31.5,
34.75
 */
function MyMap(props) {

  useEffect(() => {
    document.getElementById("map").innerHTML=<div id="map" className="map"></div>
    var myCenter = [props.lng, props.lat];
    const map = tt.map({
      key: 'bLbbqjTYrBaGF78U8HJboRc97VjfOa25',
      center: myCenter,
      container: 'map',
      zoom: 5,
    });
    // map.addControl(new tt.FullscreenControl());
    // map.addControl(new tt.NavigationControl());
  }, [ props.lat])

  return (
    <div className=" mainMap " id="main">

      <div id="map" className="map"></div>
    </div>
  )
}

export default MyMap

