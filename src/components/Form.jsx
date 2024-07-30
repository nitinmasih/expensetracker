import React, { useState } from 'react';
import "./Form.css";
import { useAppContext } from '../context/context';
import {  useNavigate } from 'react-router-dom';

const Form = () => {
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const { dispatch } = useAppContext();
     const navigate = useNavigate()
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newObject = { name, value };
        dispatch({ type: "ADD_EXPENSE", payload: newObject });
        setName("");
        setValue("");
    };

    return (
        <div className='expense-tracker'>
            <h1 style={{minWidth:"300px",textAlign:"center",color:"green"}}>Expense Tracker</h1>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="expense-name">Expense Name</label>
                <input
                    type="text"
                    id="expense-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="expense-value">Expense Value</label>
                <input
                    type="number"
                    id="expense-value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button className='submit-btn' type='submit'>Submit</button>
            </form>
            <button className='next-btn' onClick={()=>navigate("/expensetable")} >Next</button>
        </div>
    );
};

export default Form;
