import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem.js";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Kayıt Bulunamadı</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
