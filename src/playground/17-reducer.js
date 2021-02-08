// function that called in the createStore() is the reducer
// Actions - an object that gets sent to the store  
// Actions: Increment, decrement, reset
// I'd like to increament count or reset count

import {createStore} from 'redux';

// Action generators -> function that return action objects

const incrementCount = ({incrementBy = 1} = {} ) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount= ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({count}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})


// Reducers     --> in real app multi reducers exists
// 1. Reducers are pure function        --> in pure function, the output just depend by input and doesnt have relation with variables outside scope -> reducer is based on state and action
// 2. Never change state or action / only read from state or action 

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }
};

// This func define once
const store = createStore(countReducer);

// Watch for changing state
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())           // This func called every time state changed
})

// // Action: increment
// store.dispatch ({
//     type: 'INCREMENT',
//     incrementBy: 5
// })
store.dispatch(incrementCount())

// unsubscribe()

// Action: reset
// store.dispatch({
//     type: 'RESET'
// })
store.dispatch(resetCount())


// // Action: decrement
// store.dispatch ({
//     type: 'DECREMENT'
// })
store.dispatch(decrementCount())

// store.dispatch ({
//     type: 'DECREMENT',
//     decrementBy: 10
// })
store.dispatch(decrementCount({decrementBy: 20}))


// store.dispatch({
//     type: 'SET',
//     count: 101
// })
store.dispatch(setCount({count: 101}))
