import React, { Component } from 'react';
import './Contact.css';

class Events extends Component {
  // Edit About component or pages/about.jsx to include your information.
  render() {
    return (
      <div className="main-content">
        <h1>Contact Us</h1>
        <p>Got a question? Hit us up!</p>

        <form className="contact-form">
          <div className="contact-fields">
            <input className="contact-field" type="text" name="name" id="name" placeholder="Name" />
            <input className="contact-field" type="email" name="email" id="email" placeholder="Email" />
          </div>
          <textarea name="message" id="message" className="contact-message" placeholder="Message" rows="4" />
        </form>
      </div>
    );
  }
}

export default Events;
