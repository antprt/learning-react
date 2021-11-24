import { useState } from "react"

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false)

    const saveExpenseDataHandler = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpenseHandler(expenseData)
    }

    const showExpenseFormHandler = () => {
        setShowExpenseForm(true);
    }

    const hideExpenseFormHandler = () => {
        setShowExpenseForm(false);
    }

    if(showExpenseForm){
        return(
            <div>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelShowExpenseForm={hideExpenseFormHandler}/>
            </div>
        )
    }

    return(
        <div>
            <button onClick={showExpenseFormHandler} value="true">ADD NEW EXPENSE</button>
        </div>
    )
}

export default NewExpense;