import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Image } from 'gestalt';
import './Home.css';

const FeaturedSection = styled.div`
  display: block;
  justify-content: space-around;
  position: relative;
  margin: 70px 0;
  border-top: #d8d8d8 1px solid;
  border-bottom: #d8d8d8 1px solid;

  ${breakpoint('sm')`
    display: flex;
    margin-top: 0;
  `};

  ${breakpoint('md')`
  `};
`;

const FeaturedPhoto = styled.div`
  margin-right: 0;
  height: 300px;

  ${breakpoint('sm')`
    height: 600px;
  `};
`;

const FeaturedInfo = styled.div`
  width: 100%;
  padding: 20px;

  ${breakpoint('sm')`
      padding: 10px 20px;
      width: 50%;
  `};
`;

const FeaturedHeader = styled.div`
  position: absolute;
  top: -25px;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  letter-spacing: 0.6px;
  line-height: 1.15em;
  text-rendering: geometricPrecision;
  text-transform: uppercase;

  ${breakpoint('sm')`
    position: unset;
  `};
`;

const Title = styled.h5`
  margin-top: 10px;

  ${breakpoint('sm')`
    margin-top: 50px;
  `};
`;

const Excerpt = styled.div`
  margin: 20px 0;

  p {
    margin: 0 !important;
  }

  ${breakpoint('sm')`
    margin: 50px 0 ;
  `};
`;

const LearnMore = styled.div`
  display: flex;
  justify-content: center;

  ${breakpoint('sm')`
    justify-content: flex-start;
  `};
`;

class FeaturedContent extends Component {
  render() {
    return (
      <FeaturedSection>
        <Link
          to="/havasupai-falls-mooney-falls-and-beaver-falls"
          className="featured-photo"
        >
          <FeaturedPhoto>
            <Image
              alt="Featured Image"
              naturalHeight={1}
              naturalWidth={1}
              fit="cover"
              src="https://s3-us-west-1.amazonaws.com/twohalfhitches/trail+guides/Havasupai/thumbnail.jpeg"
            />
          </FeaturedPhoto>
        </Link>
        <FeaturedInfo>
          <FeaturedHeader className="home-subtitle">
            Featured Content
          </FeaturedHeader>

          <Title>Havasupai Falls: A Backpacker&#39;s Guide</Title>

          <Excerpt className="post-excerpt">
            <p>
              Stand at the foot of the giant itself. Havasupai Falls is one of
              the most beautiful waterfalls on this planet, and is one of the
              best backpacking trips that you need to experience in your
              lifetime. Check out our complete guide and backpacking experience
              to the hidden oasis of{' '}
              <i>&#34;the people of the blue-green waters.&#34;</i>
            </p>
          </Excerpt>

          <LearnMore>
            <Link to="/havasupai-falls-mooney-falls-and-beaver-falls">
              <button type="submit">Learn More</button>
            </Link>
          </LearnMore>
        </FeaturedInfo>
      </FeaturedSection>
    );
  }
}

export default FeaturedContent;
