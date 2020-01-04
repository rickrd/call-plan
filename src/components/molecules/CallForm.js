import React from 'react'

import { connect } from 'react-redux'

import styled from 'styled-components'

import { addCall } from '../redux/actions'

const CallFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

  h2 {
    font-size: 16px;
    font-weight: 300;
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

  const priceFound = prices.filter(price => {
    return price.from === from.value && price.to === to.value
  })

  if (priceFound.length <= 0) {
    alert('Insira um DDD válido')
    return null
  }

  if (parseInt(time.value) <= parseInt(plan.value)) {
    withPlan = '0,00'
  } else {
    withPlan = (
      (parseInt(time.value) - parseInt(plan.value)) *
      (parseFloat(priceFound[0].price) + parseFloat((priceFound[0].price / 100) * 10))
    ).toFixed(2)
  }

  withoutPlan = (parseInt(time.value) * parseFloat(priceFound[0].price)).toFixed(2)

  const call = {
    from: from.value,
    to: to.value,
    time: time.value,
    plan: plan.value,
    withPlan: withPlan,
    withoutPlan: withoutPlan
  }

  props.dispatch(addCall(call))

  console.log(call)
}

const CallForm = props => {
  return (
    <CallFormWrapper>
      <h2>Calcule o valor da sua chamada:</h2>
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
