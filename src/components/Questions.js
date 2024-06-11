import React from 'react';
import '../styles/Questions.css'

const Questions = () => {
    return (
        <div>
            <div className="questionsContainer">
                <h2 >Four key questions answered by Crest</h2>
                <div className="questions">
                    <div className="question-box">
                        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg" alt="What to order" />
                        <h3>What to order</h3>
                        <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
                    </div>

                    <div className="question-box">
                        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg" alt="What to order" />
                        <h3>What to order</h3>
                        <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
                    </div>

                    <div className="question-box">
                        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg" alt="What to order" />
                        <h3>What to order</h3>
                        <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
                    </div>

                    <div className="question-box">
                        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg" alt="What to order" />
                        <h3>What to order</h3>
                        <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions;