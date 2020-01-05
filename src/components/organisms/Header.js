import React from 'react'

import styled from 'styled-components'

import Logo from '../atoms/Logo'
import Description from '../atoms/Description'
import HeaderMenu from '../molecules/HeaderMenu'

const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #fff;
  color: #fff;
  padding: 10px 0;
  margin-bottom: 100px;
`

const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo></Logo>
        <Description></Description>
        <HeaderMenu></HeaderMenu>
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header
