import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Smouny</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2025-12-31" />
        </div>
      </div>
      <div className="new-expense_actions" />
      <button type="submit">Add Expense</button>
    </form>
  );
};
export default ExpenseForm;
