import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import './Home.css';

const FeaturedSection = styled.div``;

const FeaturedPhoto = styled.div``;

const FeaturedInfo = styled.div``;

const FeaturedHeader = styled.div``;

const Title = styled.h5``;

const Excerpt = styled.div``;

class FeaturedContent extends Component {
  render() {
    return (
      <FeaturedSection className="featured-section">
        <Link
          to="/havasupai-falls-mooney-falls-and-beaver-falls"
          className="featured-photo"
        >
          <FeaturedPhoto
            className="featured-photo__container"
            style={{
              backgroundImage: `url(https://s3-us-west-1.amazonaws.com/twohalfhitches/trail+guides/Havasupai/thumbnail.jpeg)`
            }}
          />
        </Link>
        <FeaturedInfo className="featured-info">
          <FeaturedHeader className="home-subtitle featured-header">
            Featured Content
          </FeaturedHeader>

          <Title className="featured-title">
            Havasupai Falls: A Backpacker&#39;s Guide
          </Title>

          <Excerpt className="post-excerpt featured-excerpt">
            <p>
              Stand at the foot of the giant itself. Havasupai Falls is one of
              the most beautiful waterfalls on this planet, and is one of the
              best backpacking trips that you need to experience in your
              lifetime. Check out our complete guide and backpacking experience
              to the hidden oasis of{' '}
              <i>&#34;the people of the blue-green waters.&#34;</i>
            </p>
          </Excerpt>

          <Link
            className="featured-button"
            to="/havasupai-falls-mooney-falls-and-beaver-falls"
          >
            <button type="submit">Learn More</button>
          </Link>
        </FeaturedInfo>
      </FeaturedSection>
    );
  }
}

export default FeaturedContent;
