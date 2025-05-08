import React, { useState } from 'react'
import CommonSection from '../components/Ul/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import '../styles/shop.css'

import { Container, Row, Col } from 'reactstrap'
import products from '../assets/data/products'
import ProductsList from '../components/Ul/ProductsList'

const Shop = () => {

  const [productsData, setProductsData] = useState(products)

  const handleFilter = e => {
    
    const filterValue = e.target.value;
    if(filterValue === 'açougue'){
      const filteredProducts = products.filter(item => item.category === 'açougue');

      setProductsData(filteredProducts);
    }

    if(filterValue === 'cereais'){
      const filteredProducts = products.filter(item => item.category === 'cereais');

      setProductsData(filteredProducts);
    }

    if(filterValue === 'perfumaria'){
      const filteredProducts = products.filter(item => item.category === 'perfumaria');

      setProductsData(filteredProducts);
    }

    if(filterValue === 'bebidas'){
      const filteredProducts = products.filter(item => item.category === 'bebidas');

      setProductsData(filteredProducts);
    }

    if(filterValue === 'conserva'){
      const filteredProducts = products.filter(item => item.category === 'conserva');

      setProductsData(filteredProducts);
    }

    if(filterValue === 'matinais'){
      const filteredProducts = products.filter(item => item.category === 'matinais');

      setProductsData(filteredProducts);
    }

    if(filterValue === 'limpeza'){
      const filteredProducts = products.filter(item => item.category === 'limpeza');

      setProductsData(filteredProducts);
    }

    if(filterValue === 'utilidades'){
      const filteredProducts = products.filter(item => item.category === 'utilidades');

      setProductsData(filteredProducts);
    }

    if(filterValue === 'laticinio'){
      const filteredProducts = products.filter(item => item.category === 'laticinio');

      setProductsData(filteredProducts);
    }

    if(filterValue === 'hortifrutti'){
      const filteredProducts = products.filter(item => item.category === 'hortifrutti');

      setProductsData(filteredProducts);
    }

  };

  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }


  return (
    <Helmet title='Shop'>
      <CommonSection title='Produtos' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className='filter_widget'> 
                <select  onChange={handleFilter}>
                  <option > Escolha a Categoria</option>
                  <option value="açougue">Açougue</option>
                  <option value="bebidas">Bebidas</option>
                  <option value="cereais">Cereais</option>
                  <option value="conserva">Conserva</option>
                  <option value="hortifrutti">Hortifrutti</option>
                  <option value="matinais">Matinais</option>
                  <option value="laticinio">Laticinio</option>
                  <option value="limpeza">Limpeza</option>
                  <option value="utilidades">Utilidades</option>
                  <option value="perfumaria">Perfumaria</option>
                </select>
              </div>
            </Col>


            <Col lg='6' md='12'>
              <div className='search_box'>
                <input type="text" placeholder='Pesquisar ...' onChange={handleSearch} />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0 ? <h1 className='text-center fs-4'>Nenhum produto encontrado !</h1> : < ProductsList data={productsData}  />}
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Shop