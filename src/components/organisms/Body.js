import React from 'react'

import styled from 'styled-components'

import CallForm from '../molecules/CallForm'
import CallList from './CallList'

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
      <CallForm></CallForm>
      <CallList></CallList>
    </BodyWrapper>
  )
}

export default Body
