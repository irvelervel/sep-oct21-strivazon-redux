import { initialState } from '../store'

// the reducer is a pure function, no side-effects and with the same input
// will always produce the same output and YOU'RE NOT ALLOWED TO MANIPULATE YOUR ARGUMENTS

const mainReducer = (state = initialState, action) => {
  // action is an object!
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        // action.payload is the book we want to add!
        ...state,
        cart: {
          ...state.cart,
          // ...state.cart is carrying over every other property
          // you might have into the cart sub-object apart from products!
          //   products: state.cart.products.push(action.payload), // <-- THIS IS SUPER BAD
          //   products: state.cart.products.concat(action.payload), // <-- THIS IS ALLOWED! :)
          products: [...state.cart.products, action.payload], // THIS IS ALLOWED :)
          //   products: [],
        },
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          products: state.cart.products.filter((book, i) => i !== action.payload),
          // products: [...state.cart.products.slice(0, action.payload), ...state.cart.products.slice(action.payload + 1)], // <-- THIS ALSO WORKS :)
          // obv methods that mutate the original array (like .splice()) must not be used :(
        },
      }

    default:
      return state
  }
}

export default mainReducer
