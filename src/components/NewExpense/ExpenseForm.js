import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const baslikKeyHandler = (e) => {
    setEnteredTitle(e.target.value);
    console.log(e.target.value);
  };

  const numbKeyHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const tarihKeyHandler = (e) => {
    setEnteredDate(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); //sayfayı yeniliyor defaultta

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSubmitExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control input">
          <label>Başlık</label>
          <input type="text" value={enteredTitle} onChange={baslikKeyHandler} />
        </div>
        <div className="new-expense__control input">
          <label className="new-expense__control label">Miktar</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={numbKeyHandler}
          />
        </div>
        <div className="new-expense__control input">
          <label>Tarih</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={tarihKeyHandler}
          />
        </div>
        <div>
          <button
            className="new-expense__cancel"
            type="button"
            onClick={props.onCancelHandler}
          >
            İptal
          </button>
          <button className="new-expense__actions" type="submit">
            Ekle
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
