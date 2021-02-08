import {createStore, compineReducers, combineReducers} from 'redux'
// Setting of all these actions with single reducer is not feseable -> break to multiple reducers
// we have two big one -> expense and filter -> create two reduces one for expense and one for filters
// finally take two reducers and combine them to create complete store

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// ================================================== Expense reducer
const exppenseRedducerDefaultState = []
const expenseReducer = (state = exppenseRedducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


// ================================================== Filter reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',  
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch (action.type) {
       default:
           return state;
   }
};

// ================================================== Combine ================

const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
}));


// ==========================================================================
// ==========================================================================
console.log(store.getState())

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
