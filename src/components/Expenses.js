import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem'; 
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterYearExpensesHandler = (year) => {
        setFilteredYear = year;
    }

    return(
        <div>
            <ExpenseFilter selected={filteredYear} onYearFilterExpenses={filterYearExpensesHandler} />
            <ExpenseItem expense={props.items[0]}/>
        </div>
    )
}

export default Expenses;