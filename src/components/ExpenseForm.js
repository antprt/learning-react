import { useState } from "react"

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('default')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: date
        }

        props.onSaveExpenseData(expenseData);
    }

    return(
        <form>
            <div className="new-expense__controls">
                <label>Title</label>
                <input type='text' value={title} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type='number' value={amount} min='1' step='1' onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type='date' value={date} min='2021-01-01' max='2021-12-31' onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <button type="submit" onClick={submitHandler}>Create</button>
            </div>
        </form>
    )
}

export default ExpenseForm;