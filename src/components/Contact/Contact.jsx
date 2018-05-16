import React, { Component } from 'react';
import { Box, TextField, TextArea, Button } from 'gestalt';
import './Contact.css';

class Events extends Component {
  // Edit About component or pages/about.jsx to include your information.
  render() {
    return (
      <div className="main-content">
        <form className="contact-form">
          <Box display="flex" className="contact-fields">
            <Box column={6} marginRight={2}>
              <TextField className="contact-field" type="text" name="name" id="name" placeholder="Name" />
            </Box>
            <Box column={6} marginLeft={2}>
              <TextField className="contact-field" type="email" name="email" id="email" placeholder="Email" />
            </Box>
          </Box>
          <Box marginTop={3}>
            <TextArea name="message" id="message" className="contact-message" placeholder="Message" rows="4" />
          </Box>
          <Box marginTop={1}>
            <Button text="Send" />
          </Box>
        </form>
      </div>
    );
  }
}

export default Events;