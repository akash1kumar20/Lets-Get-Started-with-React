
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetials'
import './ExpenseItem.css';
function ExpenseItem(props){



    return  (
            <div className='expense-item'>
             <ExpenseDate date={props.date}></ExpenseDate>
             <ExpenseDetails price={props.price} location={props.location}   title={props.title}/>
                

            </div>   
    );
}

export default ExpenseItem;