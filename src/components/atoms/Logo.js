import React from 'react'

import styled from 'styled-components'

const LogoWrapper = styled.div`
  width: 200px;
  height: 100px;
  background-image: url('logo.png');
  background-repeat: no-repeat;
`

const Logo = () => {
  return <LogoWrapper></LogoWrapper>
}

export default Logo
