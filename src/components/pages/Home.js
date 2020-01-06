import React from 'react'
import { connect } from 'react-redux'

import Header from '../organisms/Header'
import Body from '../organisms/Body'
import Footer from '../organisms/Footer'

import styled from 'styled-components'

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  background-color: #58167d;
`

const Home = props => {
  return (
    <HomeWrapper>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </HomeWrapper>
  )
}

const mapStateToProps = state => {
  return {
    calls: state.calls
  }
}

export default connect(mapStateToProps)(Home)
