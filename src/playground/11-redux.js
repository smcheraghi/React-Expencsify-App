// Component are not reusable because of taking props from parents
// working with state is hard for children / sharing data is hard / accessing to state is hard
//https://redux.js.org/
//npm i redux

import {createStore} from 'redux';

// This func define once
const store = createStore((state = {count: 0}) => {
    return state;
});

console.log(store.getState())
