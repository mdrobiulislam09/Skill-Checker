import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../question/Question';

const Quiz = () => {
    const quizs = useLoaderData();
    const {name} = quizs.data ;
    const questions = quizs.data.questions ;
    return (
        <div className='container bg-warning '>
            <h1 className='text-center text-light'>Quiz of {name} </h1>
            
            <div className='mt-5'>
                {
                    questions.map(question => <Question
                        questions = {question}
                        key={question.id}
                    ></Question> )
                }
            </div>
        </div>
    );
};

export default Quiz;