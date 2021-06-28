import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

    if (props.yearSpecificExpenses.length === 0){
        return <h2 className="expenses-list__fallback"> Found no expenses. </h2>
    }
    return (
        <ul className="expense-list">
            {props.yearSpecificExpenses.map (expense => 
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )}
        </ul>
    );
}

export default ExpenseList;
