import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const INIT_EXPENSES = [];

const App = () => {
  const [expenses, setExpenses] = useState(INIT_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;