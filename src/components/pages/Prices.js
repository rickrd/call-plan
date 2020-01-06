import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const PricesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  background-color: #58167d;
  color: #fff;

  h2 {
    font-size: 18px;
    text-align: center;
  }

  a {
    color: #fff;
  }

  .responsiveTable {
    tr {
      margin-bottom: 10px;
      border: 1px solid #fff !important;

      th,
      td {
        text-align: center;
      }
    }
`

const PricesContent = styled.div`
  @media (max-width: 1280px) {
    padding: 0 10px;
  }
`

const Prices = () => {
  return (
    <PricesWrapper>
      <Header></Header>
      <PricesContent>
        <h2>Lista dos valores relacionados à seus respectivos DDD's de origem e destino:</h2>
        <Table>
          <Thead>
            <Tr>
              <Th>Origem</Th>
              <Th>Destino</Th>
              <Th>$/min</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>DDD 011</Td>
              <Td>DDD 016</Td>
              <Td>1,90</Td>
            </Tr>
            <Tr>
              <Td>DDD 016</Td>
              <Td>DDD 011</Td>
              <Td>2,90</Td>
            </Tr>
            <Tr>
              <Td>DDD 011</Td>
              <Td>DDD 017</Td>
              <Td>1,70</Td>
            </Tr>
            <Tr>
              <Td>DDD 017</Td>
              <Td>DDD 011</Td>
              <Td>2,70</Td>
            </Tr>
            <Tr>
              <Td>DDD 011</Td>
              <Td>DDD 018</Td>
              <Td>0,90</Td>
            </Tr>
            <Tr>
              <Td>DDD 018</Td>
              <Td>DDD 011</Td>
              <Td>1,90</Td>
            </Tr>
          </Tbody>
        </Table>
        <p>
          IMPORTANTE: Os valores acima valem para chamadas feitas sem o plano FaleMais. Para saber
          como funciona o plano FaleMais, acesse a página <Link to="/about">sobre</Link>.
        </p>
      </PricesContent>
      <Footer></Footer>
    </PricesWrapper>
  )
}

export default Prices
