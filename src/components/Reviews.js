import React, { useState } from "react";
import '../styles/Reviews.css';

const Reviews = () => {
    const [currentReviewIndex, setcurrentReviewIndex] = useState(0)
    const Review = [
        {
            Content: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future.Rahul and team have built a robust product with years of their experience distilled into the workflows",
            Image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664c90f75b0f0e735016706b_P-tal-p-500.webp",
            profilePicture: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddd1080709540ff764308_P-Tal%20founder.jpg",
            name: "Kirti Goel",
            bio: 'Co-founder,P- TAL',
            brandlogo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664d8f654c71b6204bdf301c_P%20TAL%20logo.svg",
            brandrecord: ["Automated Invoice Reconciliation","Channel wise Sales Classification"]
        },
        {
            Content: "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work.Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",

            Image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp",

            profilePicture: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp",

            name: "Diksha Pande",
            bio: 'Co-founder,Samosa Party',
            brandlogo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg",
            brandrecord: ["upto 95% Demand Fulfilment", "<3% Daily Stock-out"]
        },
    ];

    const handlenext = () => {
        if (currentReviewIndex < Review.length - 1) {
            setcurrentReviewIndex(currentReviewIndex + 1)

        } else {
            setcurrentReviewIndex(0)
        }

    };

    const handleprevious = () => {
        if (currentReviewIndex === 0) {
            setcurrentReviewIndex(Review.length - 1)
        } else {
            setcurrentReviewIndex(currentReviewIndex - 1)
        }
    }

    return (
        <>
            <div className="ReviewsContainer">
                <div className="Review">
                    <p id="ReviewContent">{Review[currentReviewIndex].Content}</p>

                    <div className="reviewercontainer">
                        <img src={Review[currentReviewIndex].profilePicture} alt="profilepic" id="profilePicture"/>
                        <div className="namecontainer">
                            <h4>{Review[currentReviewIndex].name}</h4>
                            <p>{Review[currentReviewIndex].bio}</p>
                        </div>
                        <img src={Review[currentReviewIndex].brandlogo} alt="profilepic" id="brandlogo"/>
                    </div>

                    <div className="ButtonContainer">
                        <button onClick={handleprevious} id="Previous">&#60;</button>
                        <button onClick={handlenext} id="Next">&#62;</button>
                   </div>

                    <div className="BenefitContainer">
                        <p>{Review[currentReviewIndex].brandrecord[0]}</p>
                        <p>{Review[currentReviewIndex].brandrecord[1]}</p>
                    </div>
                </div>

                <div className="ReviewImagecontainer">
                    <img src={Review[currentReviewIndex].Image} alt="pic"/>
                </div>
            </div>
        </>
    );
};

export default Reviews;