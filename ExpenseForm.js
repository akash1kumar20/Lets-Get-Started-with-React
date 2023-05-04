import React, {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
    const [enteredTitle, finalTitle] = useState('');
    const [enteredLocation, finalLocation] = useState('');
    const [enteredAmount, finalAmount] = useState('');
    const [enteredDate, finalDate] = useState('');
    
    const titleChanger = (event) => {
        finalTitle(event.target.value);
    }
    const amountChanger = (event) => {
        finalAmount(event.target.value);
    }
    const locationChanger = (event) => {
        finalLocation(event.target.value);
    }
    const dateChanger = (event) => {
        finalDate(event.target.value);
    }
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expsense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChanger}/>
            </div>
            <div className='new-expsense__control'>
                <label>Location</label>
                <input type='text' onChange={locationChanger}/>
            </div>
            <div className='new-expsense__control'>
                <label>Amount</label>
                <input type='number' min="0" onChange={amountChanger}/>
            </div>
            <div className='new-expsense__control'>
                <label>Date</label>
                <input type='date' min="2023-01-01" max="2025-01-01" onChange={dateChanger}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expenses</button>
        </div>
    </form>
}

export default ExpenseForm;