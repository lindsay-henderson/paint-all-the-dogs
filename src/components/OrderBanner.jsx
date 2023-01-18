import '../styles/orderBanner.css'
import {useEffect} from "react";
import * as React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '@mui/material/Button';

export const OrderBanner = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return(
<section>
<div>
<div id='button-banner' data-aos='fade-up' data-aos-duration="1000" >
    <div id="banner-image">
    <img src="/paintings/girl-and-dog.jpg" alt="a young girl with brown hair hugging a large grey dog" />
    </div>
    <div className='info-button' >
      <h2>Books are open for 2023 commissions</h2>
      <p>Order an original 9X12 watercolor painting of your pet</p>
      <Button className='button' variant="contained" size='large'><a href='/ordering'>Order Information</a></Button>
    </div>
  </div>
</div>  
</section>
  )
}