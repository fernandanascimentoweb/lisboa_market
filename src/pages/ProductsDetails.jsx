import React, {  useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/Ul/CommonSection';
import '../styles/product-details.css';
import { motion } from 'framer-motion';
import ProductsList from '../components/Ul/ProductsList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlices';
import { toast } from 'react-toastify';

const ProductsDetails = () => {
  const [tab, setTab] = useState('desc');
  const [rating, setRating] = useState(null);
  const [allReviews, setAllReviews] = useState([]);
  
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();

  const { id } = useParams();
  
  useEffect (()=> {
    window.scrollTo(0, 0);
  }, []);
  
  const product = products.find(item => item.id === id);

  if (!product) return <h2>Product not found!</h2>;

  const { imgUrl, productName, price, avgRating, reviews = [], description, shortDesc, category } = product;

  const relatedProducts = products.filter(item => item.category === category && item.id !== id);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;


    if (!reviewUserName.trim() || !reviewUserMsg.trim() || rating === null) {
      toast.error('Please fill all fields and select a rating!');
      return;
    }

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating: rating,
    };

    setAllReviews(prev => [...prev, reviewObj]);
    toast.success('Review submitted successfully!');

    reviewUser.current.value = '';
    reviewMsg.current.value = '';
    setRating(null);
  };

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    }));

    toast.success('Product added to cart!');
  };

  
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt={productName} />
            </Col>

            <Col lg="6">
              <div className="product_details">
                <h2>{productName}</h2>
                <div className="product_rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}  style={{ cursor: 'pointer' }}>
                        <i className="ri-star-s-fill"></i>
                      </span>
                    ))}
                  </div>
                  <p>(<span>{avgRating}</span> estrelas)</p>
                </div>

                <div className="d-flex align-items-center gap-5">
                  <span className="product_price">R$ {price}</span>
                  <span>Categoria: {category.toUpperCase()}</span>
                </div>

                <p className="mt-3">{shortDesc}</p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn" onClick={addToCart}>
                  Comprar
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab_wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab === 'desc' ? 'active_tab' : ''}`} onClick={() => setTab('desc')}>
                  Descrição
                </h6>
                <h6 className={`${tab === 'rev' ? 'active_tab' : ''}`} onClick={() => setTab('rev')}>
                  Avaliações ({reviews.length + allReviews.length})
                </h6>
              </div>

              {tab === 'desc' ? (
                <div className="tab_content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product_review">
                  <div className="review_wrapper mt-5">
                    <ul>
                      {[...reviews, ...allReviews].map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>{item.userName || 'Anônimo'}</h6>
                          <span>{item.rating} (estrelas)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review_form">
                      <h4>Deixe sua experiência</h4>
                      <form onSubmit={submitHandler}>
                        <div className="form_group">
                          <input type="text" placeholder="Digite seu nome" ref={reviewUser} required />
                        </div>

                        <div className="form_group d-flex align-items-center gap-5 rating_group">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <motion.span whileTap={{scale:1.2}} key={num} onClick={() => setRating(num)} style={{ cursor: 'pointer' }}>
                              {num} <i className="ri-star-s-fill"></i>
                            </motion.span>
                          ))}
                        </div>

                        <div className="form_group">
                          <textarea rows={4} type="text" placeholder="Escreva a mensagem..." ref={reviewMsg} required />
                        </div>

                        <motion.button whileTap={{scale:1.2}} type="submit" className="buy_btn">
                          Enviar
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              <Col lg="12" className="mt-5">
                <h2 className="related_title">Você também pode gostar</h2>
              </Col>

                <div className="ajeitar d-flex align-items-center gap-5 flex-columm">
                <ProductsList data={relatedProducts} />
                </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
    
  );
};


export default ProductsDetails;
