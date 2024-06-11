import React from "react";
import '../styles/footer.css'

const Footer = () => {

    const scrollToTop = () => {
        const scrollDuration = 500; // Duration of the scroll animation in milliseconds
        const scrollStep = -window.scrollY / (scrollDuration / 15);
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
        <footer>
            <div className="footerCTA">
                <h1>You can grow faster than you think!</h1>
                <p>Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.</p>
                <button>Get Started With Crest</button>
            </div>

            <div className="footersec2 footerbrandinfosmall">
                <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326df120ea3eb2_logo-white.svg" alt=""></img>
                <p>Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</p>
            </div>

            <div className="footermaininfo">
                <div className="footersec2 footerbrandinfo">
                    <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326df120ea3eb2_logo-white.svg" alt=""></img>
                    <p>Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.</p>
                </div>

                <div className="footersec2 footernavlink1">
                    <p>Explore</p>
                    <a href="https://www.getcrest.ai/product">Prouct</a>
                    <a href="https://www.getcrest.ai/pricing">Pricing</a>
                    <a href="https://www.getcrest.ai/customer-stories">Customer Stories</a>
                    <a href="https://jobs.gohire.io/crest-4g9epqum/">Career</a>
                </div>
                
                <div className="footersec2 footernavlink2">
                    <p>Learn</p>
                    <a href="https://www.getcrest.ai/about-us">About us</a>
                    <a href="https://www.getcrest.ai/blog">Blog</a>
                </div>

                <div className="footersec2 footeraddress">
                    <p>Contact Crest</p>
                    <a href="mailto:support@getcrest.ai">sales@getcrest.ai</a>
                    <a href="https://goo.gl/maps/yRWVGbr5v6A8bgiw7">Registered Office: <br/>1507, Incubex,
                        11th cross road, 19th <br />Main Road,
                        Bengaluru, India. 560102</a>
                    <a href="https://maps.app.goo.gl/Vz2jA9K9g1WxVg3D8?g_st=iw">Corporate Office:<br />
                        291, All Time Space, 4th Floor,<br />
                        15th A Cross, Sector - 6,<br />
                        HSR Layout, Bengaluru,<br />
                        India. 560102</a>
                </div>
            </div>

            <div className="footerend">
                <div className="footerpvtltd">
                    <div className="footercopyright">
                        <p>Copyright 2024 Crest</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                    <p>Conifer Innovations Private Limited <br/> CIN: U72900KA2022PTC163144</p>
                </div>
                <button onClick={scrollToTop}> &uarr;</button>
            </div>
        </footer>
    )
}

export default Footer 