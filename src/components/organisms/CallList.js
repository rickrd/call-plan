import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import CallListItem from '../molecules/CallListItem'

const CallListWrapper = styled.div`
  margin-top: 20px;

  h2 {
    margin: 0 auto;
    text-align: center;
    color: #fff;
  }
`

const CallListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`

const CallList = props => {
  const { calls } = props
  return calls && calls.length > 0 ? (
    <CallListWrapper>
      <h2>Lista de chamadas calculadas:</h2>
      <CallListItemWrapper>
      {calls.map((call, index) => (
        <CallListItem call={call} key={index}></CallListItem>
      ))}
      </CallListItemWrapper>
    </CallListWrapper>
  ) : null
}

const mapStateToProps = state => {
  return {
    calls: state.calls
  }
}

export default connect(mapStateToProps)(CallList)
