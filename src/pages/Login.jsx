import React, { useState } from 'react'
import '../styles/login.css';

import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup} from 'reactstrap';
import { Link } from 'react-router-dom';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Login</h3>

              <Form className='auth_form'>
                <FormGroup className='form_group'>
                  <input type="email" placeholder='Digite o Email' 
                  value={email} onChange={(e)=> setEmail(e.target.value)} />
                </FormGroup>
                
                <FormGroup className='form_group'>
                  <input type="password" placeholder='Digite a Senha' 
                  value={password} onChange={(e)=> setPassword(e.target.value)} />
                </FormGroup>

                <button type="submit" className='buy_btn auth_btn'> Login </button>
                <p>
                Não tem uma conta? {" "}
                  <Link to='/signup'>Crie uma conta </Link>
                </p>
              </Form>


            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login