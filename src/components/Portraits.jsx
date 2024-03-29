import'../styles/portraits.css'
import * as React from 'react';
import 'aos/dist/aos.css';

export const Portraits= () => {

  return (
    <section>
      <h3 id='intro-text'>Watercolor Pet Portraits</h3>
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
              <img src="paintings/brown-cat.jpg" className="d-block w-100" alt="..."/>
            </div> 
          </div>
          <div className="carousel-item">
            <div className='img-frame'>
              <img src="paintings/seaturtle.jpg" className="d-block w-100" alt="..."/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
  }
