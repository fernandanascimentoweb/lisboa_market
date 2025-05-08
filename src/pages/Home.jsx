import React, { useEffect, useState } from 'react';
import '../styles/home.css'

import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import heroImg from '../assets/images/banner1.avif';
import counterImg from '../assets/images/oferta.jpg';
import Services from '../services/Services';
import ProductsList from '../components/Ul/ProductsList';
import products from '../assets/data/products';
import Clock from '../components/Ul/Clock';


const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear()

  useEffect(()=>{
  const filteredTredingProducts = products.filter(item=> item.category === 'açougue'
  );

  const filteredBestSalesProducts = products.filter(item=> item.category === 'bebidas'
  );

  const filteredMobileProducts = products.filter(item=> item.category === 'perfumaria'
  );

  const filteredPopularProducts = products.filter(item=> item.category === 'hortifrutti'
  );

  const filteredWirelessProducts = products.filter(item=> item.category === 'limpeza'
  );

  setTrendingProducts(filteredTredingProducts);
  setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);

  }, []);

  return < Helmet title={"Home"}>
    <section className='hero_section'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className='hero_content'>
            <p className='hero_subtitle'>
              Produto em alta {year}
            </p>
            <h2>Produtos de qualidade, economia para seu bolso </h2>
            <p>Qualidade de atendimento, atendimento personalizado, economia de verdade, voce encontra aqui no Lisboa .</p>
            <motion.button whileTap={{scale: 1.2}} className='buy_btn'>
              <Link to='/shop'>Compre Agora </Link>
            </motion.button>
          </div>
        </Col>

        <Col lg='6' md= '6'>
          <div className='hero_img'>
            <img src={heroImg} alt="" className='fundo' />
          </div>
        </Col>

      </Row>
      </Container>
    </section>

      <Services />
      <section className='trending_products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title mb-4'> Produtos em Alta </h2>
            </Col>

            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className='best_sales'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title mb-4'> Melhores Vendas </h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className='timer_count'>
        <Container>
          <Row>
            <Col lg='6' md='12' className='count_down-col'>
              <div className='clock_top_content'>
              <h4 className='text-white fs-6 mb-2'>Ofertas Limitadas</h4>
              <h3 className='text-white fs-5 mb-3'>Produtos com qualidade</h3>
              </div>
              <Clock /> 

              <motion.button whileTap={{scale: 1.2}} className='buy_btn store_btn'>
                <Link to='/shop'> Visite a Loja </Link>
              </motion.button>
            </Col>

            <Col lg='6' md='12' className='text-end counter_img'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>


      <section className='new_arrivals'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-4'>
              <h2 className='section_title'> Novidades </h2>
            </Col>
            < ProductsList data={mobileProducts} />
            < ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular_category">
    <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section_title'> Popular na Categoria </h2>
          </Col>
          < ProductsList data={popularProducts} />
        </Row>
      </Container>
    </section>


  </Helmet>
}

export default Home