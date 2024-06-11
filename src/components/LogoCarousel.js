import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/LogoCarousel.css"

const logos = [
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aabb032484e3993df3d_wow.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652673d679d1942e616b3675_everloom.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ebeab55128d85b2a8_zavya.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb44c461952406632e27_UNCOVER.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6526695834fd99c7f319053a_MANOHAR.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ec91cc7a39f32fdd8_drip%20project.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64385aaac27309c4dfd77888_pilgrim%201.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb50ec11a19b72a44bdd_happilo.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652674569fa5bb751d73487e_furlenco%20.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/662f471ef2f2ec313a3f5557_athlos.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abd73c0bc5eae6cf1aa65e_samosa%20party%20logo.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb4280dc875e2081fcc1_PLIX.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958f53ea35cd012178e_DILIP%20SONIGARA.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cdc92e571f2b995d1_bakers%20dozen.svg",
    "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958d1b6be6bd4e44c51_sylvi.svg",
];

const LogoCarousel = () => {
    
    const settings = {
        dots: false, // Hide dots
        infinite: true, // Continuous loop
        speed: 1000, // Scroll speed
        slidesToShow: 5, // Number of logos to show at a time
        slidesToScroll: 1, // Number of logos to scroll at a time
        autoplay: true,
        autoplaySpeed: 0, // Continuous autoplay
        cssEase: 'linear', // Linear easing for smooth scrolling
        rtl: false // Set to true if you want to scroll to the left
    };

    return (
        <div className="logo-carousel">
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index}>
                        <img src={logo} alt={`Logo ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LogoCarousel;
