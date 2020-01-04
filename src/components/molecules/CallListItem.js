import React from 'react'

import styled from 'styled-components'

const CallListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  background-color: #fff;

  @media (min-width: 991px) {
    flex-direction: row;
  }

  div {
    margin-right: 20px;
  }
`

const CallListItem = props => {
  const { call } = props
  return (
    <CallListItemWrapper>
      <div>Origem: {call.from}</div>
      <div>Destino: {call.to}</div>
      <div>Tempo: {call.time}</div>
      <div>Plano FaleMais: FaleMais {call.plan}</div>
      <div>Com FaleMais: R$ {call.withPlan.toString().replace('.', ',')}</div>
      <div>Sem FaleMais: R$ {call.withoutPlan.toString().replace('.', ',')}</div>
    </CallListItemWrapper>
  )
}

export default CallListItem
