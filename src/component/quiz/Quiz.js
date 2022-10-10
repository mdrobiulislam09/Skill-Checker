import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../question/Question';

const Quiz = () => {
    const quizs = useLoaderData();
    const {name} = quizs.data ;
    const questions = quizs.data.questions ;
    console.log(questions)
    return (
        <div>
            <h1>Quiz of {name}</h1>
            <div>
                {
                    questions.map(question => <Question
                        question = {question}
                        key={question.id}
                    ></Question> )
                }
            </div>
        </div>
    );
};

export default Quiz;