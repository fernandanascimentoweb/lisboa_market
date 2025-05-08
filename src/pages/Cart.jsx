import React from 'react';
import '../styles/cart.css';

import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/Ul/CommonSection';
import { Container, Row, Col } from 'reactstrap';

import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlices';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Cart = () => {

  const cartItems = useSelector(state=> state.cart.cartItems)

  const totalAmount = useSelector(state=> state.cart.totalAmount)
  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalAmount);
  


  return (
    <Helmet title='Compras'>
      <CommonSection title='Compras' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
            {
              cartItems.length === 0 ? <h2 className='fs-4 text-center'>Nenhum item adicionado ao carrinho</h2>:
              <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Imagem</th>
                    <th>Titulo</th>
                    <th>Preço</th>
                    <th>Qtd</th>
                    <th>Excluir</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    cartItems.map((item, index) => (
                      < Tr item={item} key={index} />
                    ))
                  }
                </tbody>
              </table>
            }
            </Col>

            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>
                  Subtotal
                  <span className='fs-4 fw-bold'> {formattedTotal}</span>
                </h6>
              </div>
              <p className='fs-6 mt-2'>impostos e frete serão calculados na finalização da compra</p>
              <div>
              <button className='buy_btn w-100 '><Link to='/checkout'>Checkout</Link></button>
              <button className='buy_btn w-100 mt-3'><Link to='/shop'>Continue Comprando</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
};

const Tr = ({ item }) => {

  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  return(
    <tr>
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName} </td>
      <td>R$ {item.price}</td>
      <td>{item.quantity}</td>
      <td><motion.i whileTap={{scale: 1.2}} onClick={deleteProduct} class="ri-delete-bin-line"></motion.i></td>
    </tr>
  )
  
}

export default Cart