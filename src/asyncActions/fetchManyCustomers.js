import { setManyCustomers } from "../actions"

export const fetchManyCustomers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(setManyCustomers(json)))
    }
}