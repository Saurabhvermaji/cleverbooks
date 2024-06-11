import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const questionsAnswers = [
        {
            question: "Accurate Demand Forecasting",
            answer: "Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts don't: trends, real-time market signals, promotional activities, and even logistics disruptions.",
            Image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-800.webp'
        },
        {
            question: "HELIX: Workflow Automation",
            answer: "Build and automate custom S&OP workflows to enhance productivity and streamline your processes. Crest helps you get a bird's eye view of your supply chain, and help you do things a spreadsheet never can.",
            Image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64b9dd79c71fad2f6ea24_S%26OP-p-800.webp'
        },
        {
            question: "Automated Purchase Planning",
            answer: "Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What's more, Crest improves with every planning cycle as the data set gets richer.",
            Image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bd0e4b4b78267e66b04_Purchase%20planning-p-800.webp'
        },
        {
            question: "Automated Distribution Planning",
            answer: "Faster replenishment cycles mean more working capital for you. Granular warehouse and store-level insights help you optimally allocate materials and inventory. Say goodbye to stock-outs and excess inventory.",
            Image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d89a9ea3f05_distribution%2520planning%2520type-2%2520-p-800.webp'
        },
        {
            question: "Easy Integration",
            answer: "From all online store solutions to cloud ERPs, Crest integrates seamlessly with your current tech and ops stack.What's more? Connecting them to Crest will give you actionable insights",
            Image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d3395ea3f06_integration%2520type-2-p-800.webp'
        },
        {
            question: "Custom Dashboards",
            answer: "Create customised dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended.",
            Image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64366b9b4373ee32f68ac19c_dashboard%20ss-p-800.webp'
        },
        {
            question: "Consensus Planning",
            answer: "Get inputs from all major stakeholders for the forecast numbers with a multi-level approval process. Compare & visualise the impact of the numbers on major KPIs in real time and take informed decisions with Scenario Planning",
            Image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-800.webp'
        },
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? index : index);
    };

    return (
        <div className='faqcontainer'>
            <p>Things your spreadsheet wishes it could do</p>  
            <div className='faqsection'>
                <div className="faq">
                    {questionsAnswers.map((item, index) => (
                        <div key={index} className="faq-item">
                            <div
                                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAnswer(index)}
                            >
                                {item.question}
                            </div>
                            <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='faqimgcontainer'>
                    <img src={questionsAnswers[activeIndex].Image} alt='error'></img>
                </div>
            </div>
        </div>
    );
}; 
export default FAQ;
