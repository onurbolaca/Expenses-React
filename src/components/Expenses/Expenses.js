import "./Expenses.css";
import ExpensesList from "./ExpensesList.js";
import Card from "../UI/Card";
import React, { useState } from "react";
import Filter from "../Filter/Filter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  //ÇALIŞTI
  // const [expenseItems, setExpenseItem] = useState(expenseItem);

  function onFilter(year) {
    setFilteredYear(year);

    //ÇALIŞTI
    // const filtredItems = [];
    // for (let index = 0; index < expenseItem.length; index++) {
    //   if (expenseItem[index].props.date.getFullYear().toString() === year) {
    //     filtredItems.push(expenseItem[index]);
    //   }
    // }
    //ÇALIŞTI
    // setExpenseItem(filtredItems);
    //console.log(filtredItems);
  }

  let filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <Filter filteredYear={filteredYear} onFilter={onFilter}></Filter>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
