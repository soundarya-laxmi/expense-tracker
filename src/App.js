import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense'
import ExpenseComponent from './components/Expenses/ExpenseComponent'
//import ExpenseItem from './components/Expenses/ExpenseItem';

const dummyExpenses = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
];

const App = () => {

  const [expenses, setExpenses] = useState(dummyExpenses);
  // let expense = {
  //   date:"June 14th, 2021",
  //   item:"Car Insurance",
  //   price:"$300"
  // }


  // return React.createElement('div', {}, 
  //        React.createElement('h2', {}, "Lets get started"), 
  //        React.createElement(ExpenseComponent, {expenses:expenses})
  //        )

  const addExpenseDataHandler = (enteredExpenseData) => {
    setExpenses((prevState) => { 
      return [
      enteredExpenseData,
      ...prevState
    ]});
    // const expenses = {
    //     ...enteredExpenseData,
    //     id: Math.random().toString()
    // };
    console.log(expenses);
  }

  const filterYearDataHandler = (selectedYear) => {
    // const expenses = {
    //     ...enteredExpenseData,
    //     id: Math.random().toString()
    // };
    console.log("selectedYearData");
    console.log(selectedYear);
  }

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler}/>
      <ExpenseComponent expenses={expenses} onFilterYearData={filterYearDataHandler} />
    </div>
  );
  

    // <div>
    //   <h2>Let's get started!</h2>
    //   <ExpenseItem 
    //     date={expenses[0].date} 
    //     title={expenses[0].title} 
    //     amount={expenses[0].amount}
    //   />
    //   <ExpenseItem 
    //     date={expenses[1].date} 
    //     title={expenses[1].title} 
    //     amount={expenses[1].amount}
    //   />
    //   <ExpenseItem 
    //     date={expenses[2].date} 
    //     title={expenses[2].title} 
    //     amount={expenses[2].amount}
    //   />
    //   <ExpenseItem 
    //     date={expenses[3].date} 
    //     title={expenses[3].title} 
    //     amount={expenses[3].amount}
    //   />
    // </div>
}

export default App;
