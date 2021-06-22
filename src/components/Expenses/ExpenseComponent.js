import React, {useState} from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './ExpenseComponent.css'

const ExpenseComponent = props => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterYearHandler = (selectedYear) => {
        // const filteredYearData = {
        //     ...selectedYear,
        // };
        setFilteredYear(selectedYear);
        props.onFilterYearData(filteredYear);
    }

    const yearSpecificExpenses = props.expenses.filter((exp) => exp.date.getFullYear().toString() === filteredYear );

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterYear={filterYearHandler} />
                <ExpensesChart yearSpecificExpenses={yearSpecificExpenses} />
                <ExpenseList yearSpecificExpenses={yearSpecificExpenses} />



                {/* {yearSpecificExpenses.length === 0 ? (
                <p> No items found </p>
                ) : (
                    yearSpecificExpenses.map (expense => 
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))} */}

                {/* {yearSpecificExpenses.length === 0 && (<p> No items found </p>) }
                {yearSpecificExpenses.length > 0 && yearSpecificExpenses.map (expense => 
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )}    
                  */}
            </Card>
        </li>
    );
}

export default ExpenseComponent;