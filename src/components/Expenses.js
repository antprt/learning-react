import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem'; 
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const [expenses, setExpenses] = useState(props.items);
    const filteredExpensesByYear = expenses.filter(
        item => item.date.getFullYear().toString() === filteredYear
    );

    const filterYearExpensesHandler = (year) => {
        console.log('filterYearExpensesHandler')
        setFilteredYear(year);
    }

    let expensesContent = <p>No expenses found.</p>

    if(filteredExpensesByYear.length > 0){
        expensesContent = filteredExpensesByYear.map(item => (
            <ExpenseItem
                key={item.id}
                expense={item}
            />
        ));
    }

    return(
        <div>
            <ExpenseFilter selected={filteredYear} onYearFilterExpenses={filterYearExpensesHandler} />
            {expensesContent}
        </div>
    )
}

export default Expenses;