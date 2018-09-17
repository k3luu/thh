import React, { Component } from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import TextField from '@material-ui/core/TextField';

import DrawCamp from './DrawCamp';
import config from '../../../data/SiteConfig';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import './Contact.css';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const SideBar = styled.div`
  //height: 200px;
  min-width: 400px;
  text-align: center;

  svg {
    height: 500px;
    width: 300px;
  }
`;

const FormContainer = styled.div`
  background: #f7f9fc;
  padding: 20px;
  width: 100%;
  position: relative;
`;

const Form = styled.form`
  margin: auto 0;
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  font-size: 16px;
  width: 100%;
`;

class Contact extends Component {
  render() {
    return (
      <div className="main-content contact">
        <Container>
          <SideBar>
            <DrawCamp />
            <SocialMediaIcons
              urls={config.siteSocialUrls}
              color="currentColor"
            />
          </SideBar>
          <FormContainer>
            <Form
              className="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />

              <TextField
                id="name"
                name="name"
                label="Name"
                margin="normal"
                required
                fullWidth
              />

              <TextField
                id="email"
                name="email"
                label="Email"
                margin="normal"
                required
                fullWidth
              />

              <TextField
                id="message"
                name="message"
                label="Message"
                multiline
                rowsMax="4"
                margin="normal"
                required
                fullWidth
              />

              <Button type="submit">Send</Button>
            </Form>
          </FormContainer>
        </Container>
      </div>
    );
  }
}

export default Contact;
