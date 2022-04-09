import React from 'react';
import {images} from '../../constants'
import './Newsletter.css';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mvolbewv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form className='form__newletter' onSubmit={handleSubmit}>
      
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Mail..'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Phản hồi'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='button1' type="submit" disabled={state.submitting}>
        Send 
      </button>
    </form>
  );
}

const Newsletter = () => {
  
  
  return(
  <div className="newletter">
    <div className="newletter__header">
      <h2 className="text-light">Newleter</h2>
      <img src={images.spoon} alt="" />
    </div>
    <h1 className="text-light">Gửi tới chúng tôi đánh giá của bạn!</h1>
    <h2 className="text-light">Xin đừng quên tới buổi hẹn đúng lúc!</h2>
    <div className="form__letter">
    <ContactForm />
    </div>
  </div>
);}

export default Newsletter;
