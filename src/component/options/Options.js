import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <div>
            <button  onClick={()=> answer(options)}>
                <input type="radio" name="address" value={options.ADDRESS}>
                    {options.ADDRESS}
                </input>
                <span>{options}</span>
            </button>
            <ToastContainer autoClose={1000}></ToastContainer>
        </div>
    );
};

export default Options;