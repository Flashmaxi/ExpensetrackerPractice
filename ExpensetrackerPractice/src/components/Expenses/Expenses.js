import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";



const Expenses = (props) => {
  const [yearChoice, setYearChoice] = useState("2020");

  const yearChoiceHandler = (selectedYear) => {
    setYearChoice(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearChoice;
  });
  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={yearChoice}
          onChangeFilter={yearChoiceHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
