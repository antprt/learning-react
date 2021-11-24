import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import './App.css';

const App = () => {
  const expenses = [
    { date: new Date(2021, 2, 11), title: 'Car insurance', amount: 100 },
    { date: new Date(2020, 2, 14), title: 'Home insurance', amount: 200 },
    { date: new Date(2019, 2, 21), title: 'Market', amount: 187 }
  ]

  const addExpenseHandler = (expense) => {
    console.log(expense)
  }

  return (
    <div className="">
      <NewExpense onAddExpenseHandler={addExpenseHandler}/>
      <hr/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
