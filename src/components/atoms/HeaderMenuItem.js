import React from 'react'

import styled from 'styled-components'

const HeaderMenuItemWrapper = styled.div`
  margin: 0 0 10px 0;

  @media (min-width: 1280px) {
    margin: 0 10px 0;
  }
`

const HeaderMenuItem = props => {
  return <HeaderMenuItemWrapper>{props.title}</HeaderMenuItemWrapper>
}

export default HeaderMenuItem
