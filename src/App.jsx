import { useState } from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
import Footer from "./Components/Footer/Footer";

const INIT_EXPENSES = [];

const App = () => {
  const [expenses, setExpenses] = useState(INIT_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <Footer />
    </>
  );
};

export default App;
