import React, { Component } from 'react';
import { Box } from 'gestalt';
import config from '../../../data/SiteConfig';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import './Contact.css';

class Events extends Component {
  // Edit About component or pages/about.jsx to include your information.
  render() {
    return (
      <div className="main-content contact">
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <Box display="flex" className="contact-fields">
            <Box column={6} marginRight={2}>
              <input
                className="contact-field"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </Box>
            <Box column={6} marginLeft={2}>
              <input
                className="contact-field"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </Box>
          </Box>
          <Box marginTop={3}>
            <textarea name="message" rows="4" placeholder="Message" required />
          </Box>
          <Box display="flex" marginTop={10}>
            <button type="submit" className="contact-button">
              Send
            </button>
          </Box>
        </form>

        <Box display="flex" justifyContent="center" marginTop={12}>
          <SocialMediaIcons urls={config.siteSocialUrls} color="currentColor" />
        </Box>
      </div>
    );
  }
}

export default Events;
