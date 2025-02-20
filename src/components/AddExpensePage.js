import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseFrom'
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense))
            props.history.push('/')                                 // redirect to the root page
        }}/>
    </div>
);

export default connect()(AddExpensePage);