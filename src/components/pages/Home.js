import React from 'react'
import { connect } from 'react-redux'

import Header from '../organisms/Header'
import Body from '../organisms/Body'

const Home = props => {
  console.log(props)
  return (
    <div>
      <Header></Header>
      <Body></Body>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    calls: state.calls
  }
}

export default connect(mapStateToProps)(Home)
