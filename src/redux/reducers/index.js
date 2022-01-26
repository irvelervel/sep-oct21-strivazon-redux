import { initialState } from '../store'

// the reducer is a pure function, no side-effects and with the same input
// will always produce the same output and YOU'RE NOT ALLOWED TO MANIPULATE YOUR ARGUMENTS

const mainReducer = (state = initialState, action) => {
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

    default:
      return state
  }
}

export default mainReducer
