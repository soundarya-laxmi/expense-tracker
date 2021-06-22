import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {


    // let expenseContent = <p className="expenses-list__fallback"> No items found </p>

    // if (props.yearSpecificExpenses.length > 0 )
    // {
    //     expenseContent = props.yearSpecificExpenses.map (expense => 
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     )
    // }

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
