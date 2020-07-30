import React from 'react'

function Header() {
    let pic = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/world-map-continent-and-country-labels-globe-turner-llc.jpg"
    return (
        <header className="container d-flex align-items-center">
            <div className="container text-center">
                <h1 className="display-2">Meir Atlas</h1>
            </div>
        </header>
    )
}

export default Header


/*
    let pic ="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/world-map-continent-and-country-labels-globe-turner-llc.jpg"
    return (
        <div>
            <div className="headerPic" style={{backgroundImage:`url(${pic})`}}></div>
        </div>
    )

*/