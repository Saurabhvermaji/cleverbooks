import React, { useState } from 'react';
import '../styles/KeyMetrics.css';

const KeyMetrics = () => {
    const [activeButton, setActiveButton] = useState(1);

    const metricsContent = {
        1: {
            number: '85%',
            description: 'Reduction in out-of-stock',
        },
        2: {
            number: '25 days',
            description: 'Reduction in cash recovery time',
        },
        3: {
            number: '15%',
            description: 'Growth in revenue',
        },
    };

    return (
        <div className="key-metrics">
            <div className='keyiconbuttonContainer'>
                
                <div className="icon-section">
                    <div className="icon-container" style={{ top: `${(activeButton - 1) * 60}px` }}>
                        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d83fbea3ef8_Impact-icon.svg" alt="Icon" className="icon-image" />
                    </div>
                    <div className="vertical-line"></div>
                </div>

                <div className="buttons-section">
                    <button
                        className={`metric-button ${activeButton === 1 ? 'active' : ''}`}
                        onClick={() => setActiveButton(1)}
                    >
                        STOCKOUTS
                    </button>
                    <button
                        className={`metric-button ${activeButton === 2 ? 'active' : ''}`}
                        onClick={() => setActiveButton(2)}
                    >
                        CASH RECOVERY CYCLE
                    </button>
                    <button
                        className={`metric-button ${activeButton === 3 ? 'active' : ''}`}
                        onClick={() => setActiveButton(3)}
                    >
                        REVENUE
                    </button>
                </div>
            </div>
            
            <div className="content-section">
                <div className="metric-number">{metricsContent[activeButton].number}</div>
                <div className="metric-description">{metricsContent[activeButton].description}</div>
            </div>
        </div>
    );
};

export default KeyMetrics;
