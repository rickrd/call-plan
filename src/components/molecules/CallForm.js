import React from 'react'

import { connect } from 'react-redux'

import styled from 'styled-components'

const CallFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 991px) {
    flex-direction: row;
  }

  form input {
    margin-right: 10px;
  }
`

const handleFormSubmit = (e, props) => {
  e.preventDefault()
  console.log(props)
}

const CallForm = props => {
  return (
    <CallFormWrapper>
      <form
        onSubmit={e => {
          handleFormSubmit(e, props)
        }}
      >
        <input id="from"></input>
        <input id="to"></input>
        <input id="time"></input>
        <input id="plan"></input>
        <button>Calcular</button>
      </form>
    </CallFormWrapper>
  )
}

const mapStateToProps = state => {
  return {
    calls: state.calls
  }
}

export default connect(mapStateToProps)(CallForm)
