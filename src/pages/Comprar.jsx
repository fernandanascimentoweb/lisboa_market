import React from 'react';
import '../styles/comprar.css';
import CommonSection from '../components/Ul/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Row } from 'reactstrap'


const Comprar = () => {
  return (
    <Helmet title='Como comprar?'>
      <CommonSection title='Como Comprar ?' />
        <Container>
            <Row>
                <Col>
                <div className='comprar_text'>
                    <h3>◾Como comprar no KekeMix? </h3>
                    <p>
                        Faça as compras no conforto da sua casa, com praticidade, segurança e entrega garantida. Busque produtos, escolha a quantidade* e coloque no carrinho. Os produtos adicionados são direcionado para o whatsapp da loja mais proximo para você.
                    </p>
                    <h3>
                        ◾Confirme o endereço e forma de pagamento
                    </h3>
                    <p>
                        Informe o endereço de entrega de sua compra. Você também pode optar por retirar sua compra no KekeMix.
                    </p>
                    <p>
                        Após a validação da compra no site, iremos atende-lo(a) no WhatsApp
                        Pronto! Agora é só aguardar a entrega.
                    </p>
                    <p>
                        Os produtos da sua compra serão selecionados e armazenados com todo o cuidado para serem entregues no endereço informado, ou para serem retirados na loja.
                    </p>
                </div>
                </Col>
            </Row>

        </Container>
    </Helmet>
  )
}

export default Comprar