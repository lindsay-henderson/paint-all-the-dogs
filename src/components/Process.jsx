import '../styles/process.css'

export const Process = () => {
  return (
    <div>
      <h1>Process for ordering</h1>
      <div className="process-explanation">
        <p className="p1">I base the pet's portrait on  one of your favorite photos of your pet.  You will email me the photo you would like me to use, along with any other photos that might be a good reference for their face or markings.  If you have a preference for a background, or any fun information about your pet's personality, feel free to let me know, but It's not a requirement.  </p>
        <img src="/paintings/spookyDraft.jpg" 
        alt="rough draft of a black and white cate sitting in palm leaves" />
        <p className="p2">I take a $25 deposit, and then will paint a rough draft of the painting and send it to you for approval.  Upon approval, I will paint the final portrait and send you a photo. After that, I collect the remaining cost of the painting, put your original artwork in a matboard for extra protection, and pop it in the mail!</p>
        <img src="/paintings/spookyFinal.jpg" alt="a black and white cate sitting in palm leaves" />
        <p className="p3">The whole process takes about 6-8 weeks.  I can try to accomodate for a shorter time window on a case by case basis. It never hurts to ask!</p>
      </div>
    </div>
  )
}
