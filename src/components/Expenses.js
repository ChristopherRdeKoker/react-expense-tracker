import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./NewExpense/ExpensesFilter.js";
import Card from "./Card";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [changeFilterDate, setChangeFilterDate] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    // setChangeFilterDate(event.target.value);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter value={changeFilterDate} onChangeFilter={filterChangeHandler} />
        <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>

        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>

        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>

        <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
