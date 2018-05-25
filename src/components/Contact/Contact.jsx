import React, { Component } from 'react';
import { Box, TextField, TextArea } from 'gestalt';
import config from '../../../data/SiteConfig';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import './Contact.css';

class Events extends Component {
  // Edit About component or pages/about.jsx to include your information.
  render() {
    return (
      <div className="main-content contact">
        <form className="contact-form" name="contact" method="POST" data-netlify="true" action="/">
          <Box display="flex" className="contact-fields">
            <Box column={6} marginRight={2}>
              <TextField className="contact-field" type="text" name="name" placeholder="Name" />
            </Box>
            <Box column={6} marginLeft={2}>
              <TextField className="contact-field" type="email" name="email" placeholder="Email" />
            </Box>
          </Box>
          <Box marginTop={3}>
            <TextArea name="message" className="contact-message" placeholder="Message" rows="4" />
          </Box>
          <Box display="flex" marginTop={1}>
            <button type="submit" className="contact-button">
              Send
            </button>
          </Box>
        </form>

        <Box display="flex" alignItems="center" marginTop={12}>
          <Box marginRight={10}>
            <h5>Connect With Us!</h5>
          </Box>
          <SocialMediaIcons urls={config.siteSocialUrls} color="currentColor" />
        </Box>
      </div>
    );
  }
}

export default Events;
