import React from 'react'

import { connect } from 'react-redux'

import styled from 'styled-components'

import { addCall } from '../redux/actions'

const CallFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 991px) {
    flex-direction: row;
  }

  form input,
  form select {
    margin-right: 10px;
  }

  form button {
    margin-left: 10px;
  }
`

const handleFormSubmit = (e, props) => {
  e.preventDefault()
  let withPlan, withoutPlan

  const { prices } = props

  const { from, to, time, plan } = e.target

  const checkFromAndToValue = prices.filter(price => {
    return price.from === from.value && price.to === to.value
  })

  console.log(checkFromAndToValue)

  if (checkFromAndToValue.length <= 0) {
    alert('Insira um DDD válido')
    return null
  }

  if (time.value <= plan.value) {
    withPlan = 0
  } else {
    withPlan = plan.value - time.value
    withPlan = withPlan * 1
  }

  const call = {
    from: from.value,
    to: to.value,
    time: time.value,
    plan: plan.value
  }

  props.dispatch(addCall(call))

  console.log(call)
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
        <select id="plan">
          <option value="30">FaleMais 30</option>
          <option value="60">FaleMais 60</option>
          <option value="120">FaleMais 120</option>
        </select>
        <button>Calcular</button>
      </form>
    </CallFormWrapper>
  )
}

const mapStateToProps = state => {
  return {
    calls: state.calls,
    prices: state.prices
  }
}

export default connect(mapStateToProps)(CallForm)
