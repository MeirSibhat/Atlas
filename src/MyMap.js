import React from 'react'
/*
31.5,
34.75
 */
function MyMap(props) {
    let lat=31.5;
    let lng=34.75;
    const API_KEY = "=AIzaSyAm0dN8LFvTqMpiWABlPizAKL-ESWtQkwo"
    return (
        <iframe  src={`https://goo.gl/maps/8mN1KtTdqx55xiCj9`}></iframe>
      )
}

export default MyMap

//  <iframe name="gMap" src={`https://www.google.com/maps/embed/v1/place?q=${this.props.location.lat},${ this.props.location.lng}&key=${API_KEY}`}></iframe>