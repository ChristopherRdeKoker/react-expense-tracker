import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./NewExpense/ExpensesFilter.js";
import Card from "./Card";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter value={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.length === 0 && <p>Sorry bud, no expenses found🐶</p>}
        {filteredExpenses.length >= 1 && filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
      </Card>
    </div>
  );
}

export default Expenses;
