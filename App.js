import ExpenseItem from './components/ExpenseItem';
import logo from './logo.svg';
import './App.css';
import NewExpense from './components/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2023, 5, 20),
      title: 'Toilet Paper',
      amount: 94.12,
      locationOfExpenditure: 'Home-Item',
    },
    { id: 'e2', 
    date: new Date(2023, 7, 22),
      title: 'New TV', 
      amount: 799.49, 
      locationOfExpenditure: 'House-Appliances'
    },
    {
      id: 'e3',
      date: new Date(2023, 2, 2),
      title: 'Car Insurance',
      amount: 294.67,
      locationOfExpenditure: 'Transport',
    },
    {
      id: 'e4',
      date: new Date(2023, 1, 20),
      title: 'New Desk (Wooden)',
      amount: 450,
      locationOfExpenditure: 'Shopping',
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewExpense onAddExpense={addExpenseHandler}/>
        <ExpenseItem 
                   date = {expenses[0].date}
                   title ={expenses[0].title} 
                   price ={expenses[0].amount}
                   location ={expenses[0].locationOfExpenditure}
        ></ExpenseItem>
                <ExpenseItem 
                   date = {expenses[1].date}
                   title ={expenses[1].title} 
                   price ={expenses[1].amount}
                   location ={expenses[1].locationOfExpenditure}
        ></ExpenseItem>
                <ExpenseItem 
                   date = {expenses[2].date}
                   title ={expenses[2].title} 
                   price ={expenses[2].amount}
                   location ={expenses[2].locationOfExpenditure}
        ></ExpenseItem>
                <ExpenseItem 
                   date = {expenses[3].date}
                   title ={expenses[3].title} 
                   price ={expenses[3].amount}
                   location ={expenses[3].locationOfExpenditure}
        ></ExpenseItem>
        
      </header>
    </div>
  );
}

export default App;
