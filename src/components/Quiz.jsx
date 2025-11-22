import React, { useState } from 'react';
import './Quiz.css';

const Quiz = ({ question, options, answer }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowResult(true);
    };

    const isCorrect = selectedOption === answer;

    return (
        <div className="quiz-container">
            <h4>Quick Quiz</h4>
            <p className="question">{question}</p>
            <div className="options">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className={`option-btn ${showResult
                                ? option === answer
                                    ? 'correct'
                                    : option === selectedOption
                                        ? 'incorrect'
                                        : ''
                                : ''
                            }`}
                        onClick={() => !showResult && handleOptionClick(option)}
                        disabled={showResult}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {showResult && (
                <div className={`result ${isCorrect ? 'success' : 'error'}`}>
                    {isCorrect ? 'Correct! Well done.' : `Incorrect. The correct answer is ${answer}.`}
                </div>
            )}
        </div>
    );
};

export default Quiz;
