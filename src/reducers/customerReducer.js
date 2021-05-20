const defState = {
    customers: []
}

export const customerReducer = (state = defState, action) => {
    switch(action.type){
        case 'ADD_MANY_CUSTOMERS':
            return {
                ...state,
                customers: [...state.customers, ...action.payload]
            }
        case 'ADD_CUSTOMER':
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }
        case 'REMOVE_CUSTOMER':
            return {
                ...state,
                customers: state.customers.filter(customer => customer.id !== action.payload)
            }
        default:
            return state
    }
}