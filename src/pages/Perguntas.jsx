import React from 'react'
import CommonSection from '../components/Ul/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Row } from 'reactstrap'
import '../styles/perguntas.css'



const Perguntas = () => {
  return (
    <Helmet title='Perguntas frequentes'>
      <CommonSection title='Perguntas frequentes' />
        <Container>
          <Row>
            <Col>
              <div className='perguntas'>
                <h5>◾Quem pode comprar no KekeMix ?</h5>
                <p>
                  No KekeMix, todo mundo é bem-vindo! Donos de estabelecimentos, profissionais informais, famílias, etc. Todos podem comprar sem cadastro e sem burocracia.
                </p>
              </div>

              <div className='perguntas'>
                <h5>◾Posso retirar as compras no estabelecimento ?</h5>
                <p>
                  É claro, essa opção é livre, você ainda vai poder poupar com o frete.
                </p>
              </div>

              <div className='perguntas'>
                <h5>◾Posso comprar a qualquer hora ?</h5>
                <p>
                  Sim, o site funcionam 24 horas, porém os prazos para retirada e entrega seguem um padrão.
                </p>
              </div>


            </Col>
          </Row>
        </Container>
    </Helmet>
  )
}

export default Perguntas