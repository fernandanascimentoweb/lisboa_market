import React, { useEffect, useState } from 'react';
import '../styles/home.css'
import whatsapp from '../assets/images/whatssapp.svg'

import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import heroImg from '../assets/images/carrinho_hero2.png';
import counterImg from '../assets/images/encarte_promocao.jpg';
import ProductsList from '../components/Ul/ProductsList';
import products from '../assets/data/products';
import Clock from '../components/Ul/Clock';

import segunda from '../assets/images/banner-segunda.jpg'
import quarta from '../assets/images/banner-terca-quarta.jpg'
import quinta from '../assets/images/banner-quinta.jpg';
import final from '../assets/images/banner-final-semana.jpg'


import Slide from '../pages/Slider'

const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  const year = new Date().getFullYear()


  useEffect(()=>{

  const filteredTredingProducts = products.filter(item=> item.category === 'alta'
  );

  const filteredBestSalesProducts = products.filter(item=> item.category === 'melhores'
  );

  const filteredMobileProducts = products.filter(item=> item.category === 'novidade'
  );

  const filteredPopularProducts = products.filter(item=> item.category === 'popular'
  );

  


  setTrendingProducts(filteredTredingProducts);
  setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
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
            <p>Qualidade de atendimento, atendimento personalizado, economia de verdade, voce encontra aqui no KekeMix Supermercados .</p>
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

    <div className='texto_promocao'>
      <h1>Confira nossas ofertas </h1>
      <p>
        Ofertas válidas de sexta a segunda-feira, 16 a 19/05/2025, ou enquanto durarem os estoques.
      </p>
    </div>

    <Slide />
      
      
      
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


      <section>
        <Container>
          <Row>
            <Col>
              <div className='images_promocao'>
                <img src={segunda} alt="" />
                <img src={quarta} alt="" />
                <img src={quinta} alt="" />
                <img src={final} alt="" />
              </div>
            </Col>
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
                <Link to='/lojas2'> Visite a Loja </Link>
              </motion.button>
            </Col>

            <Col lg='6' md='12' className='text-end counter_img'>
              <a href={counterImg} download >
                <motion.img whileTap={{scale: 1.1}} src={counterImg} alt="Imagem para Download" style={{ cursor: 'pointer' }} />
              </a>
              <p>Clique para download </p>
            </Col>
          </Row>
        </Container>
      </section>



   <div>
  <a
    href="https://api.whatsapp.com/send?phone=5521986199143&text=Podemos%20ajudar?"
    className="btn-whatsapp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={whatsapp} alt="Fale conosco no WhatsApp" />
  </a>
</div>


      <section className='new_arrivals'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-4'>
              <h2 className='section_title'> Novidades </h2>
            </Col>
            < ProductsList data={mobileProducts} />
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