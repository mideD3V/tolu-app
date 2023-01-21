import React from 'react'
import Phone from "./contakt.png";
import { useRef } from 'react';
const Contact = () => {
  const submitForm = useRef()
  const sendEmail = () => {
    
  }
  return (
    <div className='contact-sess'>
      <div className="contact-img">
        <img src={Phone} alt="" />
      </div>
      <div className="form">
        <h2>CONTACT</h2>
        <p>Lets discuss about your project. Send me a message now.</p>
        <form
          useRef={submitForm}
          onSubmit={sendEmail}
          action="mailto:ayomideoke9@gmail.com" method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter your name"
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="38"
            rows="10"
            placeholder="Type your message here..."
          ></textarea>

          <input type="submit" value="Send message" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact