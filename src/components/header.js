import React, { useState } from 'react';
import '../styles/header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header-part logo">
                <img src={logo} alt="CleverBooks Logo" className="logo-image" />
            </div>
            <nav className={`header-part nav-links ${menuOpen ? 'open' : ''}`}>
                <div className='productcontainer'>
                    <a href="#product" id='product'>Product</a>
                    <div className='productoverlay'>
                        <div className='producthomecontainer'>
                            <img src='https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d1404ea3edc_Stock.svg' alt='Home' />
                            <p>Product Home</p>
                        </div>

                        <div className='line'></div>

                        <div className='productfeaturecontainer'>
                            <div className='productfeaturesections productfeaturesection1'>
                                <div className='productfeature'>
                                    <img src='https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/63ff51f402d807110ce327e3_HELIX%20SVG%20ICON.svg' alt='' />
                                    <div className='productfeatureinfo'>
                                        <p>HELIX: Workflow Automation</p>
                                        <p>Build and automate custom S&OP workflows</p>
                                    </div>
                                </div>

                                <div className='productfeature'>
                                    <img src='https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326de50dea3e93_Distribution%20Planning.svg' alt='' />
                                    <div className='productfeatureinfo'>
                                        <p>Automated Distribution Planning</p>
                                        <p>Automate distribution planning and allocation to maintain high fill rates</p>
                                    </div>
                                </div>

                                <div className='productfeature'>
                                    <img src='https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/662a4722c49c3b0e91bbc19b_consensus.svg' alt='' />
                                    <div className='productfeatureinfo'>
                                        <p>Consensus Planning</p>
                                        <p>Collaborate and take better decisions faster</p>
                                    </div>
                                </div>
                            </div>
                            <div className='productfeaturesections productfeaturesection2'>
                                <div className='productfeature'>
                                    <img src='https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d1743ea3e92_Demand%20Forcasting.svg' alt='' />
                                    <div className='productfeatureinfo'>
                                        <p>Accurate Demand Forecasting</p>
                                        <p>Dynamically predict future demand with unmatched accuracy</p>
                                    </div>
                                </div>
                                <div className='productfeature'>
                                    <img src='https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326da925ea3e91_Integrations.svg' alt='' />
                                    <div className='productfeatureinfo'>
                                        <p>Integrations</p>
                                        <p>Yes, Crest works with your tech and ops stack!</p>
                                    </div>
                                </div>
                            </div>
                            <div className='productfeaturesections productfeaturesection3'>
                                <div className='productfeature'>
                                    <img src='https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/639b3e775b326d76a9ea3e90_Purchase%20Planning.svg' alt='' />
                                    <div className='productfeatureinfo'>
                                        <p>Automated Purchase Planning</p>
                                        <p>Automate your purchase order generation</p>
                                    </div>
                                </div>
                                <div className='productfeature'>
                                    <img src='https://cdn.prod.website-files.com/639b3e775b326d0848ea3e74/643680ae1721eb351d815937_dashboard%20icon%20.svg' alt='' />
                                    <div className='productfeatureinfo'>
                                        <p>Custom Dashboards</p>
                                        <p>Build and visualise data your way</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#price">Price</a>
                <a href="#industry">Industry</a>
                <a href="#customer-stories">Customer Stories</a>
                <a href="#about">About</a>
                <a href="#blog">Blog</a>
            </nav>
            <div className="header-part buttons">
                <button className="login-button">Log In</button>
                <button className="talk-to-us-button">Talk to Us</button>
            </div>
            <button className="menu-button" onClick={toggleMenu}>☰</button>
        </header>
    );
}; 

export default Header;
