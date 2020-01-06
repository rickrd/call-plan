import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './components/redux/reducers'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './components/pages/Home'
import Prices from './components/pages/Prices'
import About from './components/pages/About'

const store = createStore(reducers)

const App = () => {
  store.subscribe(() => {
    localStorage.setItem('calls', JSON.stringify(store.getState().calls))
  })
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/prices">
            <Prices />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
