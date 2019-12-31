import { ADD_CALL } from './actions'

const initialState = {
  calls: []
}

const calls = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CALL:
      return Object.assign({}, state, action.call)
    default:
      return state
  }
}

export default function reducers(state = initialState, action) {
  return {
    calls: calls(state.calls, action)
  }
}
