import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import CallListItem from '../molecules/CallListItem'

const CallListWrapper = styled.div`
  margin-top: 20px;
`

const CallList = props => {
  const { calls } = props
  return calls && calls.length > 0 ? (
    <CallListWrapper>
      {calls.map((call, index) => (
        <CallListItem call={call} key={index}></CallListItem>
      ))}
    </CallListWrapper>
  ) : null
}

const mapStateToProps = state => {
  return {
    calls: state.calls
  }
}

export default connect(mapStateToProps)(CallList)
