import React from 'react'

import styled from 'styled-components'

import Logo from '../atoms/Logo'
import Description from '../atoms/Description'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #58167d;
  width: 100%;
  padding: 20px 0;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo></Logo>
      <Description></Description>
    </HeaderWrapper>
  )
}

export default Header
