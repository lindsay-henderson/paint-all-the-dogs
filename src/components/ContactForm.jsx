
export const ContactForm = () => {
  
  return(

<form method="POST" action="/https://formspree.io/f/xoqzajpp">
  <label for="name">Full Name</label>
  <input id="name" type="text" name="name" pattern="[A-Za-z]+" required />

  <label for="email">Email Address</label>
  <input id="email" type="email" name="email" required />

  <label for="message">Message</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Submit</button>
</form>

)}

