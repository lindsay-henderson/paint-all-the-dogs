import '../styles/ordering.css'

export const  Ordering = ()=> {

  return (
    <section className="ordering">
      <div className="size-price">
        <div className="numbers">
          <h1>Original Watercolor</h1>
          <h4>9X12 inches</h4>
          <p>comes in 11X14 inch matboard <br/> ready to frame</p>
          <h4>$175</h4>
        </div>
        <img src='/paintings/brown-cat.jpg' alt="a black and white cat sitting in palm leaves" />
      </div>  
      <div id='process'>
        <h1>Process for Ordering</h1>
        <div className="process-explanation">
          <a href="mailto:paintallthedogs@gmail.com?subject=subject&body=content"><h4>Email paintallthedogs@gmail.com</h4></a>
          <p className="p1">To best capture you pet's personality, I base my painting on one of your favorite photos. Send me the photo you would like me to use, along with any other photos that might be a good reference for their markings, or personality. I love hearing about each special animal. </p>

          <p className="p2"> When the portrait is completed, I will send you an email with a digital photo of the painting and confirm your mailing address.  Your painting will be shipped ready to frame in a white 11x14 matboard. I will provide you with a tracking number.</p>
          <p className="p3">The whole process takes 6-8 weeks.</p>

          <p>Multiple pets look great together! 50$ for each additional pet in a portrait.</p>
        <h4>Free shipping within United States</h4>
        </div>
      </div>
    </section>
  )

}