import React from 'react';

import './ExpenseItem.css';
import DateComponent from './DateComponent';
import Card from '../UI/Card';

const ExpenseItem = props => {

    // const expenseDate = new Date(2021, 6, 17);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = "$300";

    //const [title, setTitle] = useState(props.title)

    // const clickHandler = () => {
    //     setTitle("Updated!")
    //     console.log(title);

        // const expenseData = {
        //     title: props.title,
        //     amount: props.amount,
        //     date: new Date(props.date)
        // }

    return (
        <Card className="expense-item">
            {/* <div>{props.date.toISOString()}</div> */}
            <DateComponent date={props.date} />
            <div className="expense-item__description">
                <h2> {props.title} </h2>
                <div className="expense-item__price"> {props.amount} </div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    );
}

export default ExpenseItem;