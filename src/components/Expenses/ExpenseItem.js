import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "../UI/ExpenseItem.css";
import { React, useState } from "react";

export default function ExpenseItem(props) {
  const expenses = props.expenses;

  const [title, setTitle] = useState(expenses.title);

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <div>
      {expenses.map((item) => (
        <Card className="expense-item" key={item.id}>
          <ExpenseDate key={item.id} date={item.date} />
          <div className="expense-item__description">
            <h2>{item.title}</h2>
            <div className="expense-item__price">${item.amount}</div>
          </div>
          <button onClick={clickHandler}> Change Title</button>
        </Card>
      ))}
    </div>
  );
}
