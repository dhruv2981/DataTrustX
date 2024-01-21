import React from 'react';
import '../styles/SurveyCard.css';

function SurveyCard({ survey, isEnterprise, onEdit, onViewResults, onAnswer, canAnswer }) {
    return (
        <div className="survey-card">
            <h4>{survey.title}</h4>
            {isEnterprise ? (
                <div className="survey-card-buttons">
                    <button onClick={onEdit}>Edit</button>
                    <button onClick={onViewResults}>View Results</button>
                </div>
            ) : (
                <div className="survey-card-buttons">
                    {canAnswer ? (
                        <button onClick={onAnswer}>Answer</button>
                    ) : (
                        <p>Increase your credibility score to answer</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default SurveyCard;
