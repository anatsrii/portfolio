import React from 'react';
import '../styles/contact.css';
import { toggleContact } from '../stores/pageReducer';
import { useDispatch, useSelector } from 'react-redux';


function Contact() {
  const dispatch = useDispatch();
  const {contact} = useSelector((state) => state.pages);
  const submitForm = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  }
  return (
    <>
      {contact && (
        <div className="contact-container">
          <div className="contact-header">
            <button className="toggle-btn" onClick={() => dispatch(toggleContact(contact))}>
              X
            </button>
          </div>
        <div className="contact-content">
            <h2>Contact Mr.Jane</h2>
          <form className="contact-form" onSubmit={submitForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />
            <button type="submit">Send</button>
          </form>
        </div>
        </div>
      )}
      </>
  );
}

export default Contact;