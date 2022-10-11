import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Options.css'

const Options = ({options, right}) => {
    const answer = (options) => {
        if(options === right){
            return toast('Wright Answer')
        }
        else{
            return toast('Error Answer')
        }
    }
    return (
        <div className='options bg-info col-md-4 border d-block'>
            <input onClick={()=> answer(options)} type="radio" id={options} name="address" value={options}/>
            <label for={options}>{options}</label>
            <ToastContainer autoClose={1000}></ToastContainer>
        </div>
    );
};

export default Options;