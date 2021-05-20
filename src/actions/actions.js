const ADD_CASH = 'ADD_CASH';
const GET_CASH = 'GET_CASH';
const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'

const setAddCash = (cash) => ({
    type:ADD_CASH, 
    payload: cash
})

const setGetCash = (cash) => ({
    type:GET_CASH, 
    payload: cash
})

const setCustomer = (customer) => ({
    type: ADD_CUSTOMER,
    payload: customer
})

const removeCustomer = (id) => ({
    type: REMOVE_CUSTOMER,
    payload: id
})

const setManyCustomers = (customers) => ({
        type: ADD_MANY_CUSTOMERS,
        payload: customers
})

export {
    setAddCash,
    setGetCash,
    setCustomer,
    removeCustomer,
    setManyCustomers
}