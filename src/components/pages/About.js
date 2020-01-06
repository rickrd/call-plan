import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  background-color: #58167d;
`

const AboutContent = styled.div`
  max-width: 1280px;
  color: #fff;

  @media (max-width: 1280px) {
    padding: 0 10px;
  }

  a {
    color: #fff;
    text-decoration: underline;
  }
`

const About = () => {
  return (
    <AboutWrapper>
      <Header></Header>
      <AboutContent>
        <p>
          A empresa de telefonia Telzir, especializada em chamadas de longa distância nacional, vai
          colocar um novo produto no mercado chamado FaleMais. Normalmente um cliente Telzir pode
          fazer uma chamada de uma cidade para outra pagando uma tarifa fixa por minuto, com o preço
          sendo pré-definido em uma lista com os códigos DDDs de origem e destino.
        </p>
        <p>
          Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até
          um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes
          tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são FaleMais 30 (30
          minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos). Para acessar os valores
          da tarifa normal do minuto clique <Link to="/prices">aqui</Link>.
        </p>
      </AboutContent>
      <Footer></Footer>
    </AboutWrapper>
  )
}

export default About
