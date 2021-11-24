import React, { useState } from 'react';

import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import './App.css';

const DEFAULT_EXPENSES = [
  { id: Math.random(), date: new Date(2021, 2, 11), title: 'Car insurance', amount: 100 },
  { id: Math.random(), date: new Date(2021, 2, 14), title: 'Home insurance', amount: 200 },
  { id: Math.random(), date: new Date(2019, 2, 21), title: 'Market', amount: 187 }
]

const App = () => {
  const [expenses, setExpenses] = useState(DEFAULT_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
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
