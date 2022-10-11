import React from 'react';
import { Link } from 'react-router-dom';
import './SkillSubject.css'

const SkillSubject = ({skill}) => {
    const {id, name, logo, total}= skill ;
    return (
        <div className='skills text-center'>
            <img src={logo} alt="" />
            <h3>{name}</h3>
            <h5>qustion: {total}</h5>
            <Link className='bg-success d-block'  to={`/topic/${id}`}>Test Skill</Link>
        </div>
    );
};

export default SkillSubject;