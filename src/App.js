import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './components/redux/reducers'

import Home from './components/pages/Home'

const store = createStore(reducers)

const App = () => {
  return <Provider store={store}><Home></Home></Provider>
}

export default App
