import React from 'react'

import styled from 'styled-components'

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
`

const Logo = () => {
  return (
    <LogoWrapper>
      <img src="phone.png" width="64" height="64"></img>
      <h1>FaleMais</h1>
    </LogoWrapper>
  )
}

export default Logo
