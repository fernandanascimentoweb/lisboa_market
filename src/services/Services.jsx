import React from 'react';
import './services.css';

import serviceData from '../assets/data/serviceData'

import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';


const Services = () => {
  return (
    <section>
        <Container>
            <Row>
                {
                    serviceData.map((item, index) => (
                        <Col lg='3' md='4' key={index}>
                            <motion.div whileHover={{scale: 1.1}}
                                className='service_item'
                                style={{background: `${item.bg}`}}>
                                <span className='icone_lado'>
                                    <i class={item.icon}></i>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </span>
                            </motion.div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default Services