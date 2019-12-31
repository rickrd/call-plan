import { ADD_CALL } from './actions'

const initialState = {
  calls: [],
  prices: [
    { from: '011', to: '016', price: '1.9' },
    { from: '016', to: '011', price: '2.9' },
    { from: '011', to: '017', price: '1.7' },
    { from: '017', to: '011', price: '2.7' },
    { from: '011', to: '018', price: '0.9' },
    { from: '018', to: '011', price: '1.9' }
  ]
}

const calls = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CALL:
      return [...state, action.call]
    default:
      return state
  }
}

export default function reducers(state = initialState, action) {
  return {
    calls: calls(state.calls, action),
    prices: state.prices
  }
}
