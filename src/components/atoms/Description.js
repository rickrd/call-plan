import React from 'react'

import styled from 'styled-components'

const DescriptionWrapper = styled.div`
  max-width: 1000px;
  color: #fff;
`

const Description = () => {
  return (
    <DescriptionWrapper>
      Seja bem-vindo! Neste site você pode calcular valores referentes á chamadas feitas através do
      plano FaleMais.
    </DescriptionWrapper>
  )
}

export default Description
