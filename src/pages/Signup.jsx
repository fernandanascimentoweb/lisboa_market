import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';


const Signup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ file, setFile] = useState(null);


  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Signup</h3>

              <Form className='auth_form'>
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Digite seu nome' 
                  value={username} onChange={(e)=> setUsername(e.target.value)} />
                </FormGroup>
                
                <FormGroup className='form_group'>
                  <input type="email" placeholder='Digite o email' 
                  value={email} onChange={(e)=> setEmail(e.target.value)} />
                </FormGroup>
                
                <FormGroup className='form_group'>
                  <input type="password" placeholder='Digite a senha' 
                  value={password} onChange={(e)=> setPassword(e.target.value)} />
                </FormGroup>
                
                <FormGroup className='form_group'>
                  <input type="file"  
                  onChange={(e)=> setFile(e.target.files[0])} />
                </FormGroup>

                <button type="submit" className='buy_btn auth_btn'> Crie uma conta </button>
                <p>
                  Ja tem uma conta ? {" "} 
                  <Link to='/login'>Login</Link>
                </p>
              </Form>

            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup