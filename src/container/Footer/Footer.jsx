import React from 'react';
import FindUs from '../Findus/FindUs';
import { FooterOverlay, Newsletter, Navbar } from '../../components'
import './Footer.css';

const Footer = () => (
  <section className='footer'>
    <Navbar />
    <div className="footer__container">
      <FindUs />
      <Newsletter />
      
      <FooterOverlay />
      
      
    </div>
  </section>
);

export default Footer;
