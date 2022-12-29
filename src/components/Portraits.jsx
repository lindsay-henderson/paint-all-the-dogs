import'../styles/portraits.css'
import * as React from 'react';
import Button from '@mui/material/Button';

export const Portraits= () => {
  return (
    <section >
      <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className='img-frame'>
              <img src="paintings/pooldog.jpg" className="d-block w-100" alt="..."/>
            </div>
          </div> 
          <div className="carousel-item">
            <div className='img-frame'>
              <img src="paintings/sleeping.jpg" className="d-block w-100" alt="..."/>
            </div>
          </div> 
          <div className="carousel-item">
            <div className='img-frame'>
              <img src="paintings/seaturtle.jpg" className="d-block w-100" alt="..."/>
            </div>
          </div>
        </div>
      </div>
      <div className='info-button'>
        
          <Button className='button' variant="contained" size='large'><a href='/ordering'>Order a Portrait</a></Button>
        
      </div>    
    </section>

  )
  }
