import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

const HeaderMenuItemWrapper = styled.div`
  margin: 0 0 10px 0;
  color: #fff;

  @media (min-width: 1280px) {
    margin: 0 10px 0;
  }
`

const HeaderMenuItem = props => {
  return (
    <Link to={props.path}>
      <HeaderMenuItemWrapper>{props.title}</HeaderMenuItemWrapper>
    </Link>
  )
}

export default HeaderMenuItem
