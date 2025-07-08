import React from "react";
import "../styles/comingsoon.css"

const Comingsoon = () => {

    return (
        <div className="container-fluid comingsoon-background d-flex flex-column justify-content-center align-items-center" style={{ height: '200px' }}>
                <div><h1 style={{color: 'white'}}>Coming Soon</h1></div>
                <div><h3 style={{color: 'white'}}>Stay Tuned</h3></div>
        </div>
    );
}

export default Comingsoon;