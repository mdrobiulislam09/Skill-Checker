import React from 'react';
import Options from '../options/Options';

const Question = ({questions}) => {
    const {question, options, correctAnswer} = questions ;
    return (
        <div>
            <h3>{question}</h3>
            <div>
            {
                options.map(option => <Options 
                    options={option}
                    right={correctAnswer}
                    key={option}
                    ></Options>)
            }
            </div>
        </div>
    );
};

export default Question;