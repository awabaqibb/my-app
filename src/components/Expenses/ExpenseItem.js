import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "../UI/ExpenseItem.css";

export default function ExpenseItem(props) {
  const expenses = props.expenses;

  return (
    <div>
      {expenses.map((item, index) => (
        <Card className="expense-item" key={index}>
          <ExpenseDate date={item.date} />
          <div className="expense-item__description">
            <h2>{item.title}</h2>
            <div className="expense-item__price">${item.amount}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
