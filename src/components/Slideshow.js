import React, { useState, useEffect, useRef } from 'react';
import '../styles/Slideshow.css';

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const slides = [
        {
            image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a2c8d8b6a42e610f78e10d_expert%201-p-500.png',
            heading: 'Deep domain expertise',
            content: 'Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.'
        },
        {
            image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg',
            heading: 'A focus on KPIs that matter',
            content: 'Our tools help you make decisions to grow your business. Everything works towards improving cash flow and product availability'
        },
        {
            image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of%20use.svg',
            heading: 'Ease of use, for everyone',
            content: 'With an intuitive interface and empathetic design, Crest requires only minimal training (or beginner-level knowledge of supply chain) to use.'
        },
        {
            image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dab14ea3f0b_Purpose-built%20%26%20ever-improving%20tech.svg',
            heading: 'Purpose-built & ever-improving tech',
            content: 'Our demand forecasting engine has been meticulously-built, while our ML engine constantly trains on years of data and is ever-evolving.'
        },
    ];

    const totalSlides = slides.length;
    const autoSlideTimeout = useRef(null);

    const nextSlide = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setCurrentSlide((prevSlide) => prevSlide + 1);
    };

    const prevSlide = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setCurrentSlide((prevSlide) => prevSlide - 1);
    };

    useEffect(() => {
        if (isAnimating) {
            const timeout = setTimeout(() => {
                setIsAnimating(false);

                if (currentSlide === totalSlides + 1) {
                    setCurrentSlide(1);
                } else if (currentSlide === 0) {
                    setCurrentSlide(totalSlides);
                }
            }, 500); // Match the duration of the CSS transition

            return () => clearTimeout(timeout);
        }
    }, [currentSlide, isAnimating, totalSlides]);

    return (
        <div className='pagal'>
            <h1>Get Crest and get...</h1>
            <div className="slideshow-container">
                <div className="slideshow-content" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: isAnimating ? 'transform 0.5s ease' : 'none' }}>
                    <div className="slide">
                        <img src={slides[totalSlides - 1].image} alt="Slide" className="slide-image" />
                        <div className="slide-text">
                            <h2>{slides[totalSlides - 1].heading}</h2>
                            <p>{slides[totalSlides - 1].content}</p>
                        </div>
                    </div>
                    {slides.map((slide, index) => (
                        <div key={index} className="slide">
                            <img src={slide.image} alt="Slide" className="slide-image" />
                            <div className="slide-text">
                                <h2>{slide.heading}</h2>
                                <p>{slide.content}</p>
                            </div>
                        </div>
                    ))}
                    <div className="slide">
                        <img src={slides[0].image} alt="Slide" className="slide-image" />
                        <div className="slide-text">
                            <h2>{slides[0].heading}</h2>
                            <p>{slides[0].content}</p>
                        </div>
                    </div>
                </div>
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    );
};

export default Slideshow;
