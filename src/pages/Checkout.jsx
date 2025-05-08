import React from 'react'
import '../styles/checkout.css'

import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ul/CommonSection'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalAmount);
  
  const navigate = useNavigate();

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'> Informações de Pagamento </h6>

              <Form className='billing_form'>  
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Digite seu nome..' />
                </FormGroup>
                
                <FormGroup className='form_group'>
                  <input type="email" placeholder='Digite seu email' />
                </FormGroup>
                
                <FormGroup className='form_group'>
                  <input type="number" placeholder='Numero telefone' />
                </FormGroup>
                
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Endereço' />
                </FormGroup>

                <FormGroup className='form_group'>
                  <input type="text" placeholder='Cidade' />
                </FormGroup>
                
                <FormGroup className='form_group'>
                  <input type="text" placeholder='CEP' />
                </FormGroup>
                
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Pais' />
                </FormGroup>

              </Form>
            </Col>

            <Col lg='4'>
              <div className="checkout_cart">
                <h6>Total Qty : <span>{totalQty} itens</span></h6>
                <h6>Subtotal : <span>{formattedTotal}</span></h6>
                <h6><span>Envio : <br /> Frete Gratis </span>  <span>R$ 0</span> </h6>
                <h4>Total Cost: <span> {formattedTotal} </span></h4>
                <button onClick={()=> navigate("/success")} className='buy_btn auth_btn w-100'>Faça um pedido</button>
              </div>

            </Col>

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout