import './ExpenseForm.css';
const ExpenseForm = () => {
    const titleChanger = (event) => {
        console.log(event.target.value);
    }
    return <form>
        <div className='new-expense__controls'>
            <div className='new-expsense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChanger}/>
            </div>
            <div className='new-expsense__control'>
                <label>Location</label>
                <input type='text' />
            </div>
            <div className='new-expsense__control'>
                <label>Amount</label>
                <input type='number' min="0" />
            </div>
            <div className='new-expsense__control'>
                <label>Date</label>
                <input type='date' min="2023-01-01" max="2025-01-01" />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expenses</button>
        </div>
    </form>
}

export default ExpenseForm;