import ExpenseItem from './components/ExpenseItem';
import logo from './logo.svg';
import './App.css';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      locationOfExpenditure: 'Home-Item',
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      locationOfExpenditure: 'House-Appliances'
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      locationOfExpenditure: 'Transport',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      locationOfExpenditure: 'Shopping',
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Let's get started</h2>
        <ExpenseItem 
                   detail ={expenses[0].title} 
                   price ={expenses[0].amount}
                   location ={expenses[0].locationOfExpenditure}
        ></ExpenseItem>
                <ExpenseItem 
                   detail ={expenses[1].title} 
                   price ={expenses[1].amount}
                   location ={expenses[1].locationOfExpenditure}
        ></ExpenseItem>
                <ExpenseItem 
                   detail ={expenses[2].title} 
                   price ={expenses[2].amount}
                   location ={expenses[2].locationOfExpenditure}
        ></ExpenseItem>
                <ExpenseItem 
                   detail ={expenses[3].title} 
                   price ={expenses[3].amount}
                   location ={expenses[3].locationOfExpenditure}
        ></ExpenseItem>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
