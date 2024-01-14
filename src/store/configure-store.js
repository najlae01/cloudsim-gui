import rootReducer from '../reducers'
import { createStore } from 'redux'

// Create a variable to hold the arrow function
const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

// Export the variable as the default module
export default configureStore
