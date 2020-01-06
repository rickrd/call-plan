import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

const DescriptionWrapper = styled.div`
  max-width: 1000px;

  a {
    color: #fff;
    font-size: 32px;
    font-family: 'Roboto';
    text-decoration: none;

  }
`

const Description = () => {
  return (
    <DescriptionWrapper>
      <Link to="/">FaleMais</Link>
    </DescriptionWrapper>
  )
}

export default Description
