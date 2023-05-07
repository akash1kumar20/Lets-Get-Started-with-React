import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    
    const [enteredTitle, finalTitle] = useState('');
    const [enteredAmount, finalAmount] = useState('');
    const [enteredDate, finalDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '', 

    // })
    // const titleChanger = (event) => {
    //    setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    //    })
    // }
    // const amountChanger = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount: event.target.value,
    //        })
    // }
    // const dateChanger = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredDate: event.target.value,
    //        })
    // }
    const titleChanger = (event) => {
        finalTitle(event.target.value);
    }
    const amountChanger = (event) => {
        finalAmount(event.target.value);
    }
    const dateChanger = (event) => {
        finalDate(event.target.value);
    }
    const submission = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        finalTitle('');
        finalAmount('');
        finalDate('');
    };
    return (
    <form onSubmit={submission}>
        <div className='new-expense__controls'>
            <div className='new-expsense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChanger}/>
            </div>
            <div className='new-expsense__control'>
                <label>Amount</label>
                <input type='number' min="0" value={enteredAmount} onChange={amountChanger}/>
            </div>
            <div className='new-expsense__control'>
                <label>Date</label>
                <input type='date' min="2023-01-01" max="2025-01-01" value={enteredDate} onChange={dateChanger}/>
            </div>
        </div>
        <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expenses</button>
        </div>
    </form>
    )
}

export default ExpenseForm;