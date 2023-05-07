import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [beforeEditing, afterEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    afterEditing(false);
  };
  const startEditing = () => {
    afterEditing(true);
  }
  const stopEditing = () => {
    afterEditing(false);
  }

  return (
    <div className='new-expense'>
      {!beforeEditing && <button onClick={startEditing}>Add New Expense</button>}
    {beforeEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
  </div>
  );
};

export default NewExpense;