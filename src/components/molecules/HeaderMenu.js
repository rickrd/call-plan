import React from 'react'

import styled from 'styled-components'

import HeaderMenuItem from '../atoms/HeaderMenuItem'

const HeaderMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
  
  a {
    text-decoration: none;
  }
`

const HeaderMenu = () => {
  return (
    <HeaderMenuWrapper>
      <HeaderMenuItem title='Sobre' path="/about"></HeaderMenuItem>
      <HeaderMenuItem title='Valores' path="/prices"></HeaderMenuItem>
    </HeaderMenuWrapper>
  )
}

export default HeaderMenu
