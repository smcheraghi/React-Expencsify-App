// Actions - an object that gets sent to the store  
// Actions: Increment, decrement, reset
// I'd like to increament count or reset count

import {createStore} from 'redux';

// This func define once
const store = createStore((state = {count: 0}, action) => {
    console.log('running')
    console.log(action)
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
    return state;
});

console.log(store.getState())

// Action: increment
store.dispatch ({
    type: 'INCREMENT'
})

// Action: decrement
store.dispatch ({
    type: 'DECREMENT'
})

// Action: reset
store.dispatch({
    type: 'RESET'
})

console.log(store.getState())
