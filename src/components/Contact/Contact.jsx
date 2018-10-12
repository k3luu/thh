import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import DrawCamp from './DrawCamp';
import config from '../../../data/SiteConfig';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import './Contact.css';

const Container = styled.div``;

const SideBar = styled.div``;

const FollowUs = styled.div``;

const FollowLineBreak = styled.div``;

const FormContainer = styled.div``;

const Form = styled.form``;

const Button = styled.button``;

class Contact extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <Container className="main-content contact">
        <SideBar className="contact-sidebar">
          <DrawCamp />
          <div>
            <FollowUs className="contact-follow">Follow Us</FollowUs>
            <FollowLineBreak className="contact-linebreak" />
          </div>
          <SocialMediaIcons urls={config.siteSocialUrls} color="currentColor" />
        </SideBar>

        <FormContainer className="contact-form">
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}
          <Form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />

            <div style={{ display: 'flex', margin: '0 -5px' }}>
              <TextField
                style={{ margin: '0 5px', background: '#fff' }}
                id="name"
                name="name"
                label="Name"
                margin="normal"
                variant="outlined"
                required
                fullWidth
              />
              <TextField
                style={{ margin: '0 5px', background: '#fff' }}
                id="email"
                name="email"
                label="Email"
                margin="normal"
                variant="outlined"
                required
                fullWidth
              />
            </div>

            <TextField
              style={{ background: '#fff' }}
              id="message"
              name="message"
              label="Message"
              multiline
              rows="4"
              margin="normal"
              variant="outlined"
              required
              fullWidth
            />

            <Button className="contact-button" type="submit">
              Send
            </Button>
          </Form>
        </FormContainer>
      </Container>
    );
  }
}

export default Contact;
