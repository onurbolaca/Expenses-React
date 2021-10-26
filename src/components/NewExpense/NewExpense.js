import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSubmitExpenseData = (formData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...formData,
    };
    props.onNewExpense(expenseData);
  };

  let [showExpenseForm, setExpenseForm] = useState(false);

  let onClickAddExpenceHandler = () => {
    setExpenseForm(true);
  };

  let onCancelHandler = () => {
    setExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button
          className="new-expense__newexpense"
          type="submit"
          onClick={onClickAddExpenceHandler}
        >
          Gider Ekle
        </button>
      )}
      {showExpenseForm && (
        <ExpenseForm
          onCancelHandler={onCancelHandler}
          onSubmitExpenseData={onSubmitExpenseData}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
