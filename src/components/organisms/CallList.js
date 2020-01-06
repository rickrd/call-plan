import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const CallListWrapper = styled.div`
  margin-top: 20px;
  color: #fff;

  h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 300;
  }

  .responsiveTable {
    @media (min-width: 1280px) {
      min-width: 800px;
    }
    tr {
      margin-bottom: 10px;
      border: 1px solid #fff !important;

      th,
      td {
        text-align: center;
      }
    }
  }
`

const CallList = props => {
  const { calls } = props
  return calls && calls.length > 0 ? (
    <CallListWrapper>
      <h2>Lista de chamadas calculadas:</h2>
      <Table>
        <Thead>
          <Tr>
            <Th>Origem</Th>
            <Th>Destino</Th>
            <Th>Tempo</Th>
            <Th>Plano</Th>
            <Th>Com plano</Th>
            <Th>Sem plano</Th>
          </Tr>
        </Thead>
        <Tbody>
          {calls.map((call, index) => (
            <Tr key={index}>
              <Td>DDD {call.from}</Td>
              <Td>DDD {call.to}</Td>
              <Td>{call.time} min.</Td>
              <Td>FaleMais {call.plan}</Td>
              <Td>R$ {call.withPlan.toString().replace('.', ',')}</Td>
              <Td>R$ {call.withoutPlan.toString().replace('.', ',')}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </CallListWrapper>
  ) : null
}

const mapStateToProps = state => {
  return {
    calls: state.calls
  }
}

export default connect(mapStateToProps)(CallList)
