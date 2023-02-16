import '../styles/ordering.css'

export const  Ordering = ()=> {

  return (
  <section className="ordering">
    <>   
    <div id='key-details'>
      <div id="order-image">
        <img src='/paintings/comet.jpg' alt="a side view of a persian cat with a blue crown" />
      </div>
      <div className="numbers">
        <h2>Original Watercolor</h2>
        <div id='options'>
          <div className='size-price'>
            <div className ='price'>
            <h4>9X12 inches</h4>
            <h4>$175</h4>
            </div>
            <p>Your painting will be in a white 11x14 matboard. <br/> ready to frame</p>
          </div>
          <div className='size-price'>
          <div className ='price'>
            <h4>5X7 inches</h4>
            <h4>$75</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* <div className="size-price">
  
      </div>   */}
      <div id='process'>
        <h1>Process for Ordering</h1>
        <div className="process-explanation">
          <a href="mailto:paintallthedogs@gmail.com?subject=subject&body=content"><h4>Email paintallthedogs@gmail.com</h4></a>
          <p className="p1">To best capture you pet's personality, I base my painting on one of your favorite photos. Send me the photo you would like me to use, along with any other photos that might be a good reference for their markings, or personality. I love hearing about each special animal. </p>

          <p className="p2"> When the portrait is completed, I will send you an email with a digital photo of the painting and confirm your mailing address. I will provide you with a tracking number.</p>

          <p className="p3">The whole process takes 6-8 weeks for a 9X12 portrait, 1-2 weeks for a 5X7 portrait.</p>

          <p>Multiple pets look great together! 50$ for each additional pet in a 9X12 portrait.</p>
          <h4>Free shipping within United States</h4>
      </div>
      </div>
      </>

    </section>
  )

}