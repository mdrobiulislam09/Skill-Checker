import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SkillSubject from '../skill-subject/SkillSubject';
import './subject.css'

const Subject = () => {
    const subjects = useLoaderData();
    const {data} = subjects ;
    return (
        <div className='skill-body'>
            <h1>blog and Image</h1>
            <div className='flexs'>
            {
                data.map(subject => <SkillSubject 
                    skill ={subject}
                    key = {subject.id}
                    ></SkillSubject>)
            }
            </div>
        </div>
    );
};

export default Subject;