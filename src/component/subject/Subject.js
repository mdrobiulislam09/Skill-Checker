import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SkillSubject from '../skill-subject/SkillSubject';
import './subject.css'

const Subject = () => {
    const subjects = useLoaderData();
    const {data} = subjects ;
    return (
        <div className='skill-body text-warning'>
            <div className='header p-2'>
                <h1 className='m-0'>Introduction</h1>
                <p className='m-0 '>Expert judgement has been frequently employed with reading assessments to gauge the skills potentially measured by test tasks, for purposes such as construct validation or producing diagnostic information. There was a bigger gap between them regarding the specific skills involved in each task.</p>
            </div>
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