
export const Portraits= () => {

  return (
    <section >
      <div cid="myCarousel" lassName="carousel slide" data-bs-ride="carousel">
        <ol className="indicators">
          <li data-target='#myCarousel'
        data-slide-to="0" className="active"></li>
          <li data-target='#myCarousel'
          data-slide-to="1"></li>
          <li data-target='#myCarousel'
          data-slide-to="2"></li>
        </ol>
      {/* //----------slides----------------- */}
        <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/paintings/pooldog.jpg" className="d-block w-100" alt="..."/>
        </div> 
        <div className="carousel-item">
          <img src="/paintings/sleeping.jpg" className="d-block w-100" alt="..."/>
        </div> 
        <div className="carousel-item">
          <img src="/paintings/seaturtle.jpg" className="d-block w-100" alt="..."/>
        </div>
      </div>

      {/* //--------------navigation----------- */}
      <a href="#mycarousel" className="carousel-control-prev" type="button" role="button" data-bs-slide="prev">
        <span className="sr-only">Previous</span>
        <span className="carousel-control-prev-icon" 
        aria-hidden="true"
        ></span>
      </a>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" 
        aria-hidden="true"
        ></span>
      </button>
    </div>
    </section>

  )
  }
