import {createStore, compineReducers, combineReducers} from 'redux'
import { v4 as uuidv4 } from 'uuid'
// Setting of all these actions with single reducer is not feseable -> break to multiple reducers
// we have two big one -> expense and filter -> create two reduces one for expense and one for filters
// finally take two reducers and combine them to create complete store

// ================================================= ADD_EXPENSE
const addExpense = ({description= '', note= '', amount= 0, createAt= 0} = {}) => ({
    type: 'ADD_EXPENCE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createAt
    }
});

// ================================================= REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// ================================================= EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});

// ================================================= SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
// ================================================= SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
// ================================================= SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
// ================================================= SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
// ================================================= SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
// ================================================= Expense reducer
const exppenseRedducerDefaultState = []
const expenseReducer = (state = exppenseRedducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENCE':
            // return state.concat(action.expense);            // use concat because it doesnt change the state but push change
            return [
                ...state,                                       // spread operator -> use instead of concat
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            // const newState = state.filter((expense) => expense.id != action.id);
            const newState = state.filter(({id}) => id != action.id);
            return newState;
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                return expense
            })
        default:
            return state;
    }
};


// ================================================= Filter reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',  
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch (action.type) {
       case 'SET_TEXT_FILTER':
           return {
               ...state,
               ...action
           };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
       default:
           return state;
   }
};

// timestamps ->positive or negative int value -> counting in miliseconds -> positive go forward and negative go backward in time
// timestamp zero --> January 1st 1970 at midnight (unix epoch)
// 33400, 10, -230

// ================================================= Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        // figure out if expenses.description has the text variable inside of it
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

// ================================================= Create Store
const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
}));


// ================================================= Subscribe
store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
    // console.log(store.getState())
});



// ================================================= Call Dispatch
const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 500, createAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createAt: -1000}));


// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))

const demoStore = {
    expenses: [{
        id: '123456789',
        description: 'Janjuary rent',
        note: 'That was the final payment',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',   // date or amount
        startDate: undefined,
        endDate: undefined
    }
};


