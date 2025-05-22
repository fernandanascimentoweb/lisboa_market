import React from 'react'
import '../styles/horario.css'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/Ul/CommonSection';
import { Col, Container, Row } from 'reactstrap';


const Horario = () => {
  return (
    <Helmet title='Horario de funcionamento' >
      <CommonSection title='Horario de funcionamento'  />
        <Container>
          <Row>
            <Col lg='3' md='4' className='mb-4'>
              <div className='dias_semana'>
                  <h5>Segunda - feira</h5>
                  <div>
                    <p>Horário : 07:00 - 12:00</p>
                    <p>Horário : 13:00 - 21:00</p>
                  </div>
              </div>
            </Col>

            <Col lg='3' md='4' className='mb-4'>
              <div className='dias_semana'>
                  <h5>Terça - feira</h5>
                  <div>
                    <p>Horário : 07:00 - 12:00</p>
                    <p>Horário : 13:00 - 21:00</p>
                  </div>
              </div>
            </Col>

            <Col lg='3' md='4' className='mb-4'>
              <div className='dias_semana'>
                  <h5>Quarta - feira</h5>
                  <div>
                    <p>Horário : 07:00 - 12:00</p>
                    <p>Horário : 13:00 - 21:00</p>
                  </div>
              </div>
            </Col>

            <Col lg='3' md='4' className='mb-4'>
              <div className='dias_semana'>
                  <h5>Quinta - feira</h5>
                  <div>
                    <p>Horário : 07:00 - 12:00</p>
                    <p>Horário : 13:00 - 21:00</p>
                  </div>
              </div>
            </Col>

            <Col lg='3' md='4' className='mb-4'>
              <div className='dias_semana'>
                  <h5>Sexta - feira</h5>
                  <div>
                    <p>Horário : 07:00 - 12:00</p>
                    <p>Horário : 13:00 - 21:00</p>
                  </div>
              </div>
            </Col>

            <Col lg='3' md='4' className='mb-4'>
              <div className='dias_semana'>
                  <h5>Sabado</h5>
                  <div>
                    <p>Horário : 07:00 - 12:00</p>
                    <p>Horário : 13:00 - 21:00</p>
                  </div>
              </div>
            </Col>

            <Col lg='3' md='4' className='mb-4'>
              <div className='dias_semana'>
                  <h5>Domingo  </h5>
                  <p>( Retirada somente na loja)</p>
                  <div>
                    <p>Horário : 07:00 - 12:00</p>
                    <p>Horário : 13:00 - 21:00</p>
                  </div>
              </div>
            </Col>

          </Row>
        </Container>
    </Helmet>
  )
}

export default Horario