import React from 'react'

function Header() {
    let pic ="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/world-map-continent-and-country-labels-globe-turner-llc.jpg"
    return (
        <div>
            <div className="headerPic" style={{backgroundImage:`url(${pic})`}}></div>
        </div>
    )
}

export default Header
