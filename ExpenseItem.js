import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetials'
import './ExpenseItem.css';
function ExpenseItem(props){
    const [title, setTitle] = useState(props.title);
    const [price, setPrice] = useState(props.price);
    const clickHandler = () => {
       setTitle('New Title');
    }
    const deleteExpense = () => {
        console.log('Element Deleted');
    }
    const changeExpense = () => {
        setPrice(100);
    }

    return  (
            <div className='expense-item'>
             <ExpenseDate date={props.date}></ExpenseDate>
             <div className='expense-item__description'>
                <h2>{title}</h2>
                <ExpenseDetails location={props.location}></ExpenseDetails>
                 <div className='expense-item__price'>
                  {price}    
                </div>                   
             </div>
             <button onClick={clickHandler}>Change Title</button>
             <button onClick={deleteExpense}>Delete</button>
             <button onClick={changeExpense}>Change Expense</button>                      
            </div>   
    );
}

export default ExpenseItem;