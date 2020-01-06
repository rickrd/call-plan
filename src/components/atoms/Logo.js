import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
    color: #fff;
    font-size: 18px;
    font-family: 'Gelasio';
  }

  img {
    cursor: pointer;
  }
`

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/">
        <img src="phone.png" width="64" height="64"></img>
      </Link>
    </LogoWrapper>
  )
}

export default Logo
