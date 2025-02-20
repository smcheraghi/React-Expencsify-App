import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'                                    // allow us to provide the store to all of the components
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt:3}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 2}));
store.dispatch(addExpense({description: 'Rent', amount: 10950, createdAt: 4}));
store.dispatch(addExpense({description: 'Rent 2', amount: 109500}));


// setTimeout(()=> {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>                                            {/** Now all the component access to the store */}
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));



