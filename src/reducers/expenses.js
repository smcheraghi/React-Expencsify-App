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


export default expenseReducer;