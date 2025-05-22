import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'
import cartao from '../../assets/images/Cartoes-Site.webp'


const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
            <div className='logo'>
              <div>
                
                <h1 className='text-red'> 
                    Keke <span style={{color: 'yellow'}}>Mix</span>
                 </h1>
              </div>
            </div>
            <p className='footer_text mt-4'>
              <img src={cartao} alt="" />
            </p>
          </Col>

          

          <Col lg='2' md='3' className='mb-4'>
          <div className="footer_quick_links">
              <h4 className='quick_links_title'> Links Uteis </h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/home'> Inicio </Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/lojas2'> Loja </Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'> Checkout </Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/regulamento'> Politica privacidade </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4' className='mb-4'>
          <div className="footer_quick_links">
              <h4 className='quick_links_title'> Duvidas  </h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/comprar'> Como comprar? </Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/horario'> Regiões e horario de atendimento </Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/regulamento'> Regulamento </Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/perguntas'> Perguntas frequentes </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>



          <Col lg='2' md='3' >
          <div className="footer_quick_links">
              <h4 className='quick_links_title'> Siga-me </h4>
              <ListGroup className='footer_contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="fa-brands fa-instagram"></i></span>
                  <a href="https://www.instagram.com/kekemixsupermercados?igsh=MW5yMnoxdGh0bWd0cg==" target="_blank" rel="noopener noreferrer"><p>Instagram</p></a>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="fa-brands fa-whatsapp"></i></span>
                  <a href="https://api.whatsapp.com/send?phone=5521986199143&text=quero%20fazer%20um%20pedido!" target="_blank" rel="noopener noreferrer"><p>WhatsApp </p></a>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="fa-brands fa-facebook"></i></span>
                  <a href="https://www.facebook.com/profile.php?id=100092279334671&mibextid=ZbWKwl" target="_blank" rel="noopener noreferrer"><p>Facebook </p></a>
                </ListGroupItem>
                
              </ListGroup>
            </div>
          </Col>

          <Col lg='12' >
            <p className='footer_copyright'> Copyright {year} developed by Fernanda Marino. All rights reserved. </p>
          </Col>

        </Row>
      </Container>
    </footer>
    )
}

export default Footer