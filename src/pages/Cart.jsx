import React, { useRef } from 'react';
import '../styles/cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/Ul/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlices';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaWhatsapp } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const dispatch = useDispatch();
  

  // data formatada

  const today = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const dataCompleta = today.toLocaleDateString('pt-BR', options);


  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalAmount);



  const addressRef = useRef();
  const foneRef = useRef();
  const nomeRef = useRef();
  const referenciaRef = useRef();


  const handleSendToWhatsApp = () => {

    const nome = nomeRef.current.value.trim();
    const address = addressRef.current.value.trim();
    const referencia = referenciaRef.current.value.trim();
    const fone = foneRef.current.value.trim();

    if (!nome || !fone || !address) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

    const cartItemsZap = cartItems.map((item) => 
  `🛒 *${item.productName}* | Quantidade: ${item.quantity} | Preço: R$ ${item.price}`
).join("\n");

    //  const phone = "+5521986199143";
    
    const phone = "5521986199143";
      const message = encodeURIComponent(
`📦 *Pedido de Compras*
🗓️ (${dataCompleta})

${cartItemsZap}

🧾 *Dados do Cliente*
👤 *Nome:* ${nome}
🏠 *Endereço:* ${address}
📍 *Ponto de Referência:* ${referencia}
📞 *Telefone:* ${fone}

💰 *Total a Pagar:* ${formattedTotal}

⚠️ *Obs.:* Quando for quantidade a kg, o item pode sofrer alteração, devido ao peso.

⏳ Aguarde, você será atendido em breve!`
);

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

 
    // limpar o carrinho , usei o clear no cartslice
    dispatch(cartActions.clearCart());
    nomeRef.current.value = '';
    addressRef.current.value = '';
    referenciaRef.current.value = '';
    foneRef.current.value = '';

    alert("Pedido enviado com sucesso via WhatsApp!");

  };

  
  return (
    <Helmet title='Compras'>
      <CommonSection title='Compras' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length === 0
                  ? <h2 className='fs-4 text-center'>Nenhum item adicionado ao carrinho</h2>
                  : (
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
                            <Tr item={item} key={index} />
                          ))
                        }
                      </tbody>
                    </table>
                  )
              }
            </Col>

            <Col lg='3' mb='5' className='caixa'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>
                  Subtotal
                  <span className='fs-4 fw-bold'> {formattedTotal}</span>
                </h6>
              </div>
              <p className='fs-6 mt-4 mb-4'>Impostos e frete serão calculados na finalização da compra</p>

              <div className="mb-2 mt-3">
                <input type="text" ref={nomeRef} placeholder="Digite seu nome" className="form-control" />
              </div>

              <div className="mb-2 mt-3">
                <input type="text" ref={addressRef} placeholder="Digite seu endereço" className="form-control" />
              </div>

              <div className="mb-2 mt-3">
                <input type="text" ref={referenciaRef} placeholder="Ponto referencia do local" className="form-control" />
              </div>

              <div className="mb-2 mt-3">
                <input type="tel" ref={foneRef} placeholder="Digite seu Telefone" className="form-control" />
              </div>

              <div>
                {/* <button className='buy_btn w-100'><Link to='/checkout'>Checkout</Link></button> */}
                <button className='buy_btn w-100 mt-4 botao_zap' onClick={handleSendToWhatsApp}>
                   <span id='date-span' >Enviar Pedido </span>< FaWhatsapp size={40} className='mr-2' />
                </button>
                <button className='buy_btn w-100 mt-3 botao_compras'>
                  <Link to='/shop'>
                    <p>Continue comprando </p>
                    <FaCartShopping size={30}/>    
                  </Link>
                </button>
              </div>
            </Col>
            
          </Row>
              
          
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td><img src={item.imgUrl} alt={item.productName} style={{ width: "50px" }} /></td>
      <td>{item.productName}</td>
      <td>R$ {item.price}</td>
      <td>{item.quantity}</td>
      <td><motion.i whileTap={{ scale: 1.2 }} onClick={deleteProduct} className="ri-delete-bin-line"></motion.i></td>
    </tr>
  );
};

export default Cart;