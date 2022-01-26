import { initialState } from '../store'

// the reducer is a pure function, no side-effects and with the same input
// will always produce the same output

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default mainReducer
