import React from 'react';
import Options from '../options/Options';

const Question = ({questions}) => {
    const {question, options, correctAnswer} = questions ;
    const showAnswer = (correctAnswer) => {
        return alert(correctAnswer)
    }
    return (
        <div>
            <h3>Quiz: {question}</h3>
            <div>
            <i onClick={()=> showAnswer(correctAnswer)} class="fa-solid fa-eye"></i>
            </div>
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