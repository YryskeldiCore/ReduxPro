import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {setAddCash, setGetCash, setCustomer, removeCustomer } from './actions'
import { fetchManyCustomers } from './asyncActions/fetchManyCustomers';

const App = () => {

  const dispatch = useDispatch()

  function addCash(){
    dispatch(setAddCash(Number(prompt())))
  }

  function getCash(){
    dispatch(setGetCash(Number(prompt())))
  }

  function addCustomer(name) {
    const  customer = {
      id: Date.now(),
      name: name
    }
    dispatch(setCustomer(customer))
  }

  function delCustomer(id) {
    dispatch(removeCustomer(id))
  }

  function addManyCustomers() {
    dispatch(fetchManyCustomers())
  }

  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customer.customers)


  return (
    <div className="App">
        <div className="cash">{cash}</div>
        <div className="btn-group">
          <button className="btn" onClick={() => addCash()}>Deposit</button>
          <button className="btn" onClick={() => getCash()}>Withdraw</button>
          <button className="btn" onClick={() => addCustomer(prompt())}>Add client</button>
          <button className="btn" onClick={() => addManyCustomers()}>Add Many Customers</button>
        </div>
        <div className="customers">
          {customers.length > 0?
            <div>
              {customers.map(customer => 
				        <div onClick={() => delCustomer(customer.id)} className="customer-name">{customer.name}</div>
              )}
            </div>
            :
            <div className="no-clients">No Clients:(</div>
          }
        </div>
    </div>
  );
}

export default App;
