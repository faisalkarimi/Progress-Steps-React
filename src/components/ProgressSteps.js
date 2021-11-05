import React, { useState, useEffect } from 'react'
import './style.css'

const ProgressSteps = () => {
    const [barWidth, setBarWidth] = useState(0)
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 5;

    const handleNextBtn = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }else{
            setCurrentStep(totalSteps);
        }
    }

    const handlePrevBtn = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }else{
            setCurrentStep(1);
        }
    }

    useEffect(() => {
        setBarWidth((currentStep-1) / (totalSteps-1) * 100);
    },[currentStep]);

    return (
        <div className="container">
            <div className="progress-container">
                <div className="progress-bar" style={{width: barWidth+'%'}}></div>
                <div className="circle active">1</div>
                <div className={`circle ${currentStep >= 2 ? "active": ""}`}>2</div>
                <div className={`circle ${currentStep >= 3 ? "active": ""}`}>3</div>
                <div className={`circle ${currentStep >= 4 ? "active": ""}`}>4</div>
                <div className={`circle ${currentStep >= 5 ? "active": ""}`}>5</div>
            </div>
            <div className="btn-container">
                <button className="btn btn-prev"
                 disabled={currentStep === 1 ? true : false}
                 onClick={handlePrevBtn}>Prev</button>
                <button className="btn btn-next"
                 disabled={currentStep >= totalSteps ? true : false}
                 onClick={handleNextBtn}>Next</button>
            </div>
        </div>
    )
}

export default ProgressSteps
