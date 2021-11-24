const ExpenseFilter = (props) => {
    const filterExpenseDataHandler = (inputYearFilter) => {
        console.log(inputYearFilter.target.value)
        props.onYearFilterExpenses(inputYearFilter.target.value)
    }

    return(
        <div>
            <select value={props.selected} name="year-filter" id="year-filter" onChange={filterExpenseDataHandler}>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;