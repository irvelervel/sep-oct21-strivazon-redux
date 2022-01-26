import { createStore } from 'redux'
import mainReducer from '../reducers'

export const initialState = {
  // our intention is to have a cart array here
  // let's put it into a sub-object that will hold
  // potentially every cart-related property
  cart: {
    products: [],
  },
}

let configureStore = createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// 1) the main reducer
// 2) the initial state
// 3) the enhancer function

export default configureStore
