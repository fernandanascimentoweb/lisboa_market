import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'


const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
            <div className='logo'>
              <div>
                <h1 className='text-white'> Lisboa Market</h1>
              </div>
            </div>
            <p className='footer_text mt-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet beatae quidem aspernatur nulla? Suscipit, quaerat esse? Praesentium voluptatibus cupiditate modi?
            </p>
          </Col>

          <Col lg='3' md='3' className='mb-4'>
            <div className="footer_quick_links">
              <h4 className='quick_links_title'> Principais Categorias </h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'> Açougue </Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'> Hortifrutti </Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'> Cereais </Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'> Perfumaria </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2' md='3' className='mb-4'>
          <div className="footer_quick_links">
              <h4 className='quick_links_title'> Links Uteis </h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'> Loja </Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'> Compras </Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'> Login </Link>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'> Politica privacidade </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4' >
          <div className="footer_quick_links">
              <h4 className='quick_links_title'> Contato </h4>
              <ListGroup className='footer_contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Av. Paulista 478, loja25 - São Paulo</p>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>(11) 98855-0025 </p>
                </ListGroupItem>
                
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  <p>LisboaMarket@test.com </p>
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