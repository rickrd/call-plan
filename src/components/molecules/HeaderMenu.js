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
`

const HeaderMenu = () => {
  return (
    <HeaderMenuWrapper>
      <HeaderMenuItem title='Sobre'></HeaderMenuItem>
      <HeaderMenuItem title='Valores'></HeaderMenuItem>
    </HeaderMenuWrapper>
  )
}

export default HeaderMenu
