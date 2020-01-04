import React from 'react'
import { connect } from 'react-redux'

import CallListItem from '../molecules/CallListItem'

const CallList = props => {
  const { calls } = props
  return calls && calls.length > 0
    ? calls.map((call, index) => <CallListItem call={call} key={index}></CallListItem>)
    : null
}

const mapStateToProps = state => {
  return {
    calls: state.calls
  }
}

export default connect(mapStateToProps)(CallList)
