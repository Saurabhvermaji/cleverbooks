import React from 'react';
import '../styles/Hero.css';
    
const Hero = () => {
    
    return (
        <>
            <div className="hero">
                <div className="herotextcontainer">
                    <h1>Every order <br />fulfilled, on time.</h1>
                    <p className="herotextcontainerdiscrip">Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.</p>
                    <button>Get Stared with CleverBooks</button>
                </div>

                <div className="heroimgcontainer">
                    <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" alt="heroimg"></img>
                </div>
            </div>
        </>
    )
}

export default Hero