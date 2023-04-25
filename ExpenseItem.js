import './ExpenseItem.css';
function ExpenseItem(){
    return  (
            <div className='expense-item'>
                <div className='expense-item__description'>
                    <h2>Car Insurance</h2>
                </div>
                <div className='expense-item__price'>
                    Rs 300
                </div>
                <div className='expense-item__description'>
                    <h2>Movies</h2>
                </div>
                <div className='expense-item__price'>
                    Rs 200
                </div>
                <div className='expense-item__description'>
                    <h2>Food</h2>
                </div>
                <div className='expense-item__price'>
                    Rs 10
                </div>
                <div className='expense-item__description'>
                    <h2>Petrol</h2>
                </div>
                <div className='expense-item__price'>
                    Rs 100
                </div>

            </div>   
    );
}

export default ExpenseItem;