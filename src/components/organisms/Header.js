import React from 'react'

import styled from 'styled-components'

import Logo from '../atoms/Logo'
import Description from '../atoms/Description'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border-bottom: 0.5px solid #fff;
  color: #fff;
  padding: 10px 0;
  margin-bottom: 100px;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo></Logo>
      {/* <Description></Description> */}
      <div>Valores</div>
    </HeaderWrapper>
  )
}

export default Header
