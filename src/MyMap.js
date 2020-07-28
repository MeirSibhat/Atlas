import React, { useEffect } from 'react'
//import tt from '@tomtom-international/web-sdk-services'
import tt from '@tomtom-international/web-sdk-maps';
/*
31.5,
34.75
 */
function MyMap(props) {
  let lat = 31.5;
  let lng = 34.75;
  const API_KEY = "=bLbbqjTYrBaGF78U8HJboRc97VjfOa25-ESWtQkwo"
  useEffect(() => {
    const map = tt.map({
      key: 'bLbbqjTYrBaGF78U8HJboRc97VjfOa25',
      center: [lng, lat],
      container: 'map',
      zoom: 6,

    });
    // map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());
  }, [])

  return (
    <div>
    
      <div id="map"   className="map"></div>
    </div>
  )
}

export default MyMap

