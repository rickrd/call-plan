import React from 'react'

import styled from 'styled-components'

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #fff;
  margin-top: 100px;
  padding: 10px 0;
  color: #fff;
`

const Footer = () => {
  return <FooterWrapper>This is the footer</FooterWrapper>
}

export default Footer
