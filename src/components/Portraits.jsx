import'../styles/portraits.css'
export const Portraits= () => {

  return (
    <section >
      <h2>testing!!!</h2>
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
    </section>

  )
  }
