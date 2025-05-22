import React from 'react'
import '../styles/slider.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../assets/images/cartaz1.jpg';
import img2 from '../assets/images/cartaz2.jpg';
import img3 from '../assets/images/cartaz3.jpg';
import img4 from '../assets/images/cartaz4.jpg';
import { useEffect, useState } from 'react';


const Slider = () => {

    const [ slidePerView, setSlidePerView ] = useState(3)

  const data = [
    { id: '1', image: img1 },
    { id: '2', image: img2 },
    { id: '3', image: img3 },
    { id: '4', image: img4 },
    { id: '5', image: img1 },
    { id: '6', image: img2 },
    { id: '7', image: img3 },
    { id: '8', image: img4 },
  ]

  useEffect(() =>{
    
    function handleResize(){
        if (window.innerWidth < 720){
            setSlidePerView(1);
        } else {
            setSlidePerView(3);
        }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    }

  }, [])


  return (
    <div className='container'>
        <Swiper
            spaceBetween={50}
            slidesPerView={slidePerView}
            pagination={{ clickable: true }}
            navigation
            autoplay={{
            delay: 5000, // tempo entre slides em ms (3 segundos)
            disableOnInteraction: false, // não para o autoplay ao interagir
        }}
           
            modules={[Navigation, Pagination, Autoplay]}
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <img src={item.image} alt="Slider" className='slide-item' />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Slider