import React from 'react';
import { Box } from 'gestalt';
import './subscribe.css';

class SubscribeForm extends React.Component {
  render() {
    return (
      <div>
        <h4>Sign up with your email address to receive news and updates</h4>
        <form
          className="subscribe-form"
          name="subscribe"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="subscribe" />

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={4}
          >
            <Box marginRight={1}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </Box>
            <Box>
              <button type="submit" className="subscribe-button icon-feed">
                Subscribe
              </button>
            </Box>
          </Box>
        </form>
      </div>
    );
  }
}

export default SubscribeForm;
