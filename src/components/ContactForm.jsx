export const ContactForm = () => {

return(
<>
    <h3>Contact us</h3>
    <form id="fcf-form-id" class="fcf-form-class" method="post" action="contact-form-process.php">
      <label for="Name" class="fcf-label">Your name</label>
      <div class="fcf-input-group">
        <input type="text" id="Name" name="Name" class="fcf-form-control" required/>
      </div>
      <div class="fcf-form-group">
        <label for="Email" class="fcf-label">Your email address</label>
        <div class="fcf-input-group">
          <input type="email" id="Email" name="Email" class="fcf-form-control" required/>
        </div>
        <div class="fcf-form-group">
          <label for="Message" class="fcf-label">Your message</label>
          <div class="fcf-input-group">
            <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
          </div>
        </div>
        <div class="fcf-form-group">
          <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send</button>
        </div>
      </div>
    </form>
</>
)}


// <form method="POST" action="/https://formspree.io/f/xoqzajpp" enctype="multipart/form-data">
//   <label for="name">Full Name</label>
//   <input id="name" type="text" name="name"  
//   // pattern="[A-Z//a-z]+" 
//   required/>

//   <label for="email">Email Address</label>
//   <input id="email" type="email" name="email" required/>

//   <label for="message">Message</label>
//   <textarea id="message" name="message" required></textarea>

//   <button type="submit">Submit</button>
// </form>


// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';

// export const ContactForm = () =>  {
//   const [state, handleSubmit] = useForm("https://formspree.io/f/xoqzajpp");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
//   return (
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email" 
//         name="email"
//       />
//       <ValidationError 
//         prefix="Email" 
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError 
//         prefix="Message" 
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }

