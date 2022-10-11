import React from 'react';
import Options from '../options/Options';
import './Question.css'

const Question = ({questions}) => {
    const {question, options, correctAnswer} = questions ;
    const showAnswer = (correctAnswer) => {
    return alert(`Answer: ${correctAnswer}`)
    }
    return (
        <div className=''>
            <h3> Quiz: {question} <i onClick={()=> showAnswer(correctAnswer)} class="fa-solid fa-eye"></i> </h3>
            <div className='m-3'>
                <div className='row gap-2'>
                    {
                        options.map(option => <Options 
                            options={option}
                            right={correctAnswer}
                            key={option}
                            ></Options>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;