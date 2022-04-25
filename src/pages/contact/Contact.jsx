import React from 'react'
import Pikachu from '../../assets/images/pikachu.png'
import { ContainerImg, ImgPikachu } from './Contact.elements'

import { Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container>
      <Row xs={1} md={2}>
        <Col>
          <ContainerImg>
            <ImgPikachu src={Pikachu} />
          </ContainerImg>
        </Col>
        <Col>
          <h1>FORM</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
