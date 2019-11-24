import React from 'react';
import kombucha from '../Assets/kombucha.jpg';

function Header() {
    var coverPic = {
        width: "100%",
        height: "50%",
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
        position: "relative",
        top: "0",
        left: "0",

    }

    var heroText = {
        textAlign: "center",
        position: "absolute",
        top: "19%",
        right: "35%",
        opacity: "0.8",
        fontSize: "80px",

    }

    var heroInfo = {
        textAlign: "center",
        position: "absolute",
        bottom: "50%",
        left: "30%",
        fontSize: "25px",
        fontWeight: "bold"
    }

    var reviewInfo = {
        textAlign: "center",
        position: "absolute",
        bottom: "20%",
        left: "30%",
        fontSize: "15px",
        fontStyle: "italic",
        color: "#7FFF00",
        fontWeight: "bold"
    }
    return (
        <div>
            <div className="hero-image">
                <div className="hero-text">
                    <img src={kombucha} style={coverPic} />
                    <h1 style={heroText}>Adequate Kombuchas</h1>
                    <p style={heroInfo}>We are somewhat proud of our fermented tea!</p>
                    <p style={reviewInfo}>Not an entirely displeasing experience -  Anonymous Reviewer</p>
                </div>

            </div>
        </div>
    );
}

export default Header;