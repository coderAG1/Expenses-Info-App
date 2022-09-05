import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEdited, setIsEdited] = useState(false);
  const saveEnteredDataHandler = (enteredExpenseData) => {
    const enterdData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenses(enterdData);
    setIsEdited(false);
  };
  const startEditingHandler = () => {
    setIsEdited(true);
  };
  const stopEditingHandler = () => {
    setIsEdited(false);
  };
  return (
    <div className="new-expense">
      {!isEdited && (
        <button onClick={startEditingHandler}>Add New Expenses.</button>
      )}
      {isEdited && (
        <ExpenseForm
          onSaveEnteredData={saveEnteredDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
