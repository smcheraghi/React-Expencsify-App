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

// This func define once
const store = createStore((state = {count: 0}, action) => {
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
});

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
