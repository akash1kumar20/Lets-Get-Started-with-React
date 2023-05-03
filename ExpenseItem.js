
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetials'
import './ExpenseItem.css';
function ExpenseItem(props){
    const clickHandler = () => {
       console.log('CLicked');
    }

    return  (
            <div className='expense-item'>
             <ExpenseDate date={props.date}></ExpenseDate>
             <div className='expense-item__description'>
                 <div className='expense-item__price'>
            <ExpenseDetails price={props.price} location={props.location} title={props.title}/>    
                </div>                   
             </div>
             <button onClick={clickHandler}>Change Title</button>                 
            </div>   
    );
}

export default ExpenseItem;