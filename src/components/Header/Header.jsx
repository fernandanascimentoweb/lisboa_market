import React, { useEffect, useRef } from 'react'
import './header.css'

import { Container, Row } from 'reactstrap';
import logo from '../../assets/images/loja_logo.jpg'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import userIcon from '../../assets/images/user-icon.png'
import { useSelector } from 'react-redux';


const nav_links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Loja'
    },
    {
        path: 'cart',
        display: 'Compra'
    },
]


const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', ()=>{
          if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('sticky_header')
          }else {
            headerRef.current.classList.remove('sticky_header')
          }
        })
      }
    
      useEffect(()=> {
        stickyHeaderFunc()
    
        return () => window.removeEventListener('scroll', stickyHeaderFunc)
      });
    
      const menuToggle = () => menuRef.current.classList.toggle('active_menu')
    
      const navigateTocart = () => {
        navigate('/cart')
      }

  return (
    <header className='header' ref={headerRef}>
    <Container>
        <Row>
            <div className='nav_wrapper'>
                <div className='logo'>
                    <img src={logo} alt="" />
                    <div>
                        <Link to='/home'><h1>Lisboa Market</h1></Link>
                    </div>
                </div>

                <div className='navigation' ref={menuRef} onClick={menuToggle}>
                    <ul className='menu'>
                        {
                            nav_links.map((item, index) =>(
                                <li className='nav_item' key={index}>
                                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''} > {item.display} </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='nav_icons'>
                    <span className='fav_icon'>
                        <i class="ri-heart-line"></i>
                        <span className='badge'>1</span>
                    </span>
                    <span className='cart_icon' onClick={navigateTocart} >
                        <i class="ri-shopping-bag-line"></i>
                        <span className='badge'> {totalQuantity} </span>
                    </span>
                    <span>
                       <Link to='/login'> <img src={userIcon} alt="" /> </Link>
                    </span>

                    <div className='mobile_menu'>
                        <span onClick={menuToggle}>
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>


                </div>

            </div>
        </Row>
    </Container>
    </header>
    )
}

export default Header