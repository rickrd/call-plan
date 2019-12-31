import React from 'react'

import styled from 'styled-components'

import CallForm from '../molecules/CallForm'

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Body = () => {
  return (
    <BodyWrapper>
      <h2>Calcule o valor da sua chamada com FaleMais:</h2>
      <CallForm></CallForm>
    </BodyWrapper>
  )
}

export default Body
