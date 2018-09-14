import React from 'react';
import { Box } from 'gestalt';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Title = styled.h6`
  margin: 0 20px !important;
  text-align: center;
  letter-spacing: 0.6px;

  ${breakpoint('md')`
    margin: 0 auto;
  `};
`;

const SubscribeButton = styled.button`
  &:before {
    font-size: 9px;
    margin-right: 6px;
  }
`;

class SubscribeForm extends React.Component {
  render() {
    return (
      <div>
        <Title>
          Sign up with your email address to receive news and updates
        </Title>
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
            <Box>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </Box>
            <Box>
              <SubscribeButton type="submit" className="icon-feed">
                Subscribe
              </SubscribeButton>
            </Box>
          </Box>
        </form>
      </div>
    );
  }
}

export default SubscribeForm;
