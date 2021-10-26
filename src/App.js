import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import React, { useState } from "react";

const expenses = [
  {
    id: "e1",
    title: "Tuvalet Kağıdı",
    amount: 24.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Televizyon",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Sigorta",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Masa",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expense, setExpenses] = useState(expenses);
  const onNewExpense = (expenseData) => {
    //expense.push(expenseData);
    setExpenses((prevState) => {
      return [expenseData, ...prevState];
    });

    //setExpenses([expenseData, ...expense]);
  };

  return (
    <div>
      <NewExpense onNewExpense={onNewExpense} />
      <Expenses expenses={expense} />
    </div>
  );
}

export default App;
