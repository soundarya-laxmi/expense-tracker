import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense'
import ExpenseComponent from './components/Expenses/ExpenseComponent'

const dummyExpenses = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
];

const App = () => {

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseDataHandler = (enteredExpenseData) => {
    setExpenses((prevState) => { 
      return [
      enteredExpenseData,
      ...prevState
    ]});
    console.log(expenses);
  }

  const filterYearDataHandler = (selectedYear) => {
    console.log("selectedYearData");
    console.log(selectedYear);
  }

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler}/>
      <ExpenseComponent expenses={expenses} onFilterYearData={filterYearDataHandler} />
    </div>
  );
}

export default App;
