// Actions - an object that gets sent to the store  
// Actions: Increment, decrement, reset
// I'd like to increament count or reset count

import {createStore} from 'redux';

// This func define once
const store = createStore((state = {count: 0}, action) => {
    // console.log('running')
    // console.log(action)
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
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

// Action: increment
store.dispatch ({
    type: 'INCREMENT',
    incrementBy: 5
})

// unsubscribe()

// Action: reset
store.dispatch({
    type: 'RESET'
})


// Action: decrement
store.dispatch ({
    type: 'DECREMENT'
})

store.dispatch ({
    type: 'DECREMENT',
    decrementBy: 10
})

store.dispatch({
    type: 'SET',
    count: 101
})