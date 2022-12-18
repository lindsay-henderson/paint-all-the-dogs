export const ContactForm = () => {
  
  return(

<form method="POST" action="/https://formspree.io/f/xoqzajpp" enctype="multipart/form-data">
  <label for="name">Full Name</label>
  <input id="name" type="text" name="name" 
  // pattern="[A-Z//a-z]+" 
  required/>

  <label for="email">Email Address</label>
  <input id="email" type="email" name="email" required/>

  <label for="message">Message</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Submit</button>
</form>

)}

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

