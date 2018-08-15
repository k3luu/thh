import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Image } from 'gestalt';
import Instafeed from 'react-instafeed';
import FeaturedContent from './FeaturedContent';
import PostListing from '../PostListing/PostListing';
import SubscribeForm from '../Subscribe/SubscribeForm';
import './Home.css';

const Container = styled.div`
  padding-top: 60px;

  ${breakpoint('md')`
    padding-top: 70px;
  `};

  h4 {
    letter-spacing: 2px;
  }
`;

const HomeTitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;

  ${breakpoint('sm')`
    margin-bottom: 60px;
    font-size: 2.7rem;
  `};
`;

const RecentSection = styled.div`
  margin: 70px 0;
  border-bottom: #d8d8d8 1px solid;

  ${breakpoint('md')`
    border-bottom: 0;
  `};

  .post-title,
  .post-excerpt {
    padding: 0 10px;

    ${breakpoint('md')`
      padding: 0;
    `};
  }

  .post {
    border-bottom: 0;

    ${breakpoint('md')`
        border-bottom: #d8d8d8 1px solid;
    `};

    &:after {
      content: unset;

      ${breakpoint('md')`
        content: "";
      `};
    }
  }
`;

const RecentHeader = styled.h4`
  padding: 0 10px;
  font-size: 12px;
  margin: 0;

  ${breakpoint('md')`
    padding: 0;
  `};
`;

const BannerTitle = styled.h4`
  padding: 0 10px;

  ${breakpoint('md')`
    padding: 0;
  `};
`;

const BannerImage = styled.div`
  margin-bottom: 20px;
  height: 300px;

  > div:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

const BannerDescription = styled.p`
  padding: 0 10px;
  margin-bottom: 70px;

  ${breakpoint('md')`
    padding: 0;
  `};
`;

class Home extends Component {
  constructor(p) {
    super(p);

    this.state = {
      instaFeed: [],
      instaLoading: true
    };
  }

  getPhotos() {
    return fetch(
      'https://api.instagram.com/v1/users/self/media/recent/?access_token='
    )
      .then(response => response.json())
      .then(json => {
        console.log('IG:', json.data);
      });
  }

  render() {
    const { config } = this.props;

    const template =
      '<a href="{{link}}" target="_blank" class="instafeed__item">' +
      '<div class="instafeed__item__background" style="background-image: url({{image}})">' +
      '</div>' +
      '<div class="instafeed__item__overlay">' +
      '<div class="instafeed__item__overlay--inner">' +
      '<p class="instafeed__item__caption">{{model.short_caption}}</p>' +
      '<p class="instafeed__item__location">{{location}}</p>' +
      '</div>' +
      '</div>' +
      '</a>';

    return (
      <Container id="home" className="main-content">
        <HomeTitle className="home-title">
          Your Guide Through the Great Outdoors
        </HomeTitle>

        {/*{process.env.NODE_ENV === 'development' && (*/}
        {/*<div className="instafeed" id="instafeed">*/}
        {/*<Instafeed*/}
        {/*limit="10"*/}
        {/*ref="instafeed"*/}
        {/*resolution="standard_resolution"*/}
        {/*sortBy="most-recent"*/}
        {/*target="instafeed"*/}
        {/*template={template}*/}
        {/*userId="self"*/}
        {/*clientId="e733ec859fb74aa2b2961cefd57ea767"*/}
        {/*accessToken="3078281633.e733ec8.ce842c4c91074ffb82ddb2a7fb0adf8a"*/}
        {/*/>*/}
        {/*</div>*/}
        {/*)}*/}

        <FeaturedContent />

        <RecentSection>
          <RecentHeader className="home-subtitle">Recent Content</RecentHeader>
          <PostListing
            postEdges={this.props.nodes}
            postAuthors={this.props.authorsEdges}
            columns={3}
          />
        </RecentSection>

        <Link to="/no-matter-the-mountain">
          <BannerTitle>Campaign</BannerTitle>
          <BannerImage>
            <Image
              alt="No Matter the Mountain"
              naturalHeight={1}
              naturalWidth={1}
              fit="cover"
              src={config.campaignCover}
            />
          </BannerImage>
        </Link>
        <BannerDescription>
          Share your story with us on Instagram! Nominate your friends, and tag{' '}
          <a
            href="https://www.instagram.com/twohalfhitches"
            target="_blank"
            rel="noopener noreferrer"
          >
            @twohalfhitches
          </a>{' '}
          and{' '}
          <a
            href="https://www.instagram.com/explore/tags/nomatterthemountain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            #NoMattertheMountain
          </a>.
        </BannerDescription>

        <Link to="/trail-guides">
          <BannerTitle>Trail Guides</BannerTitle>
          <BannerImage>
            <Image
              alt="Trail Guides"
              naturalHeight={1}
              naturalWidth={1}
              fit="cover"
              src={config.guideCover}
            />
          </BannerImage>
        </Link>
        <BannerDescription>
          Follow us on our most recent expeditions! The blog is our way of
          sharing our personal experiences to show readers how engaging and
          inspiring the outdoors can be. We provide reviews of trails, photos
          from our trip, and tips if you're planning on trekking the same trail.
        </BannerDescription>

        <Link to="/trail-finder">
          <BannerTitle>Trail Finder</BannerTitle>
          <BannerImage>
            <Image
              alt="Trail Finder"
              naturalHeight={1}
              naturalWidth={1}
              fit="cover"
              src={config.finderCover}
            />
          </BannerImage>
        </Link>
        <BannerDescription>
          Find a trail that best suits you based on your personal interest and
          level of experience! The map has over 100 California trails plotted,
          and is designed to provide you with the basic information you will
          need to decide which is the right fit for you.
        </BannerDescription>

        <Link to="/fundamentals">
          <BannerTitle>Fundamentals</BannerTitle>
          <BannerImage>
            <Image
              alt="Fundamentals"
              naturalHeight={1}
              naturalWidth={1}
              fit="cover"
              src={config.fundamentalsCover}
            />
          </BannerImage>
        </Link>
        <BannerDescription>
          Are you new to hiking, or need to brush up on your outdoor skills?
          Fundamentals gives you a breakdown of all sorts of skills you will
          want to know before you head out. Part of exploring is being
          adaptable, and understanding the way nature can shift. Be prepared for
          the unforeseen conditions the Great Outdoors will bring you.
        </BannerDescription>

        <Link to="/events">
          <BannerTitle>Events</BannerTitle>
          <BannerImage>
            <Image
              alt="Events"
              naturalHeight={1}
              naturalWidth={1}
              fit="cover"
              src={config.eventCover}
            />
          </BannerImage>
        </Link>
        <BannerDescription>
          Be a part of Two Half-Hitches and join us as we hit the trails! Check
          out our monthly calendar of events for more details.
        </BannerDescription>

        {/*{process.env.NODE_ENV === 'production' && (*/}
        {/*<div className="elfsight-app-b078d77e-2973-42a5-980d-a24ace8fee65" />*/}
        {/*)}*/}

        <div className="home-subscription">
          <SubscribeForm />
        </div>
      </Container>
    );
  }
}

export default Home;
