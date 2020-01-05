import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const CallListWrapper = styled.div`
  margin-top: 20px;

  h2 {
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
  }
`

const CallList = props => {
  const { calls } = props
  return calls && calls.length > 0 ? (
    <CallListWrapper>
      <h2>Lista de chamadas calculadas:</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Origem</TableCell>
              <TableCell align="left">Destino</TableCell>
              <TableCell align="left">Tempo (min.)</TableCell>
              <TableCell align="left">Plano</TableCell>
              <TableCell align="left">Com FaleMais</TableCell>
              <TableCell align="left">Sem FaleMais</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {calls.map((call, index) => (
              <TableRow key={index}>
                <TableCell align="left">{call.from}</TableCell>
                <TableCell align="left">{call.to}</TableCell>
                <TableCell align="left">{call.time}</TableCell>
                <TableCell align="left">{call.plan}</TableCell>
                <TableCell align="left">R$ {call.withPlan.toString().replace('.', ',')}</TableCell>
                <TableCell align="left">R$ {call.withoutPlan.toString().replace('.', ',')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CallListWrapper>
  ) : null
}

const mapStateToProps = state => {
  return {
    calls: state.calls
  }
}

export default connect(mapStateToProps)(CallList)
