import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Box, Image } from 'gestalt';
import Instafeed from 'react-instafeed';
import PostListing from '../PostListing/PostListing';
import SubscribeForm from '../Subscribe/SubscribeForm';
import './Home.css';

const HomeTitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;

  ${breakpoint('sm')`
    margin-bottom: 60px;
    font-size: 2.7rem;
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
      <div id="home" className="home-content main-content">
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

        <div className="featured-section">
          <Link
            to="/havasupai-falls-mooney-falls-and-beaver-falls"
            className="featured-photo"
          >
            <div className="featured-photo__container">
              <Image
                alt="Featured Image"
                naturalHeight={1}
                naturalWidth={1}
                fit="cover"
                src="https://s3-us-west-1.amazonaws.com/twohalfhitches/trail+guides/Havasupai/thumbnail.jpeg"
              />
            </div>
          </Link>
          <section className="featured-info">
            <h4 className="home-subtitle">Featured Content</h4>
            <h5 className="featured-title">
              Havasupai Falls: A Backpacker&#39;s Guide
            </h5>

            <div className="featured-excerpt post-excerpt">
              <p>
                Stand at the foot of the giant itself. Havasupai Falls is one of
                the most beautiful waterfalls on this planet, and is one of the
                best backpacking trips that you need to experience in your
                lifetime. Check out our complete guide and backpacking
                experience to the hidden oasis of{' '}
                <i>&#34;the people of the blue-green waters.&#34;</i>
              </p>
            </div>

            <Link to="/havasupai-falls-mooney-falls-and-beaver-falls">
              <button type="submit">Learn More</button>
            </Link>
          </section>
        </div>

        <section className="recent-section">
          <h4 className="home-subtitle">Recent Content</h4>
          <PostListing
            postEdges={this.props.nodes}
            postAuthors={this.props.authorsEdges}
            columns={3}
          />
        </section>

        <Link to="/no-matter-the-mountain">
          <h4>Campaign</h4>
          <div className="home-banner">
            <Box shape="rounded" color="white" height={300}>
              <Image
                alt="No Matter the Mountain"
                naturalHeight={1}
                naturalWidth={1}
                fit="cover"
                src={config.campaignCover}
              />
            </Box>
          </div>
        </Link>
        <p>
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
        </p>

        <Link to="/trail-guides">
          <h4>Trail Guides</h4>
          <div className="home-banner">
            <Box shape="rounded" color="white" height={300}>
              <Image
                alt="Trail Guides"
                naturalHeight={1}
                naturalWidth={1}
                fit="cover"
                src={config.guideCover}
              />
            </Box>
          </div>
        </Link>
        <p>
          Follow us on our most recent expeditions! The blog is our way of
          sharing our personal experiences to show readers how engaging and
          inspiring the outdoors can be. We provide reviews of trails, photos
          from our trip, and tips if you're planning on trekking the same trail.
        </p>

        <Link to="/trail-finder">
          <h4>Trail Finder</h4>
          <div className="home-banner">
            <Box shape="rounded" color="white" height={300}>
              <Image
                alt="Trail Finder"
                naturalHeight={1}
                naturalWidth={1}
                fit="cover"
                src={config.finderCover}
              />
            </Box>
          </div>
        </Link>
        <p>
          Find a trail that best suits you based on your personal interest and
          level of experience! The map has over 100 California trails plotted,
          and is designed to provide you with the basic information you will
          need to decide which is the right fit for you.
        </p>

        <Link to="/fundamentals">
          <h4>Fundamentals</h4>
          <div className="home-banner">
            <Box shape="rounded" color="white" height={300}>
              <Image
                alt="Fundamentals"
                naturalHeight={1}
                naturalWidth={1}
                fit="cover"
                src={config.fundamentalsCover}
              />
            </Box>
          </div>
        </Link>
        <p>
          Are you new to hiking, or need to brush up on your outdoor skills?
          Fundamentals gives you a breakdown of all sorts of skills you will
          want to know before you head out. Part of exploring is being
          adaptable, and understanding the way nature can shift. Be prepared for
          the unforeseen conditions the Great Outdoors will bring you.
        </p>

        <Link to="/events">
          <h4>Events</h4>
          <div className="home-banner">
            <Box shape="rounded" color="white" height={300}>
              <Image
                alt="Events"
                naturalHeight={1}
                naturalWidth={1}
                fit="cover"
                src={config.eventCover}
              />
            </Box>
          </div>
        </Link>
        <p>
          Be a part of Two Half-Hitches and join us as we hit the trails! Check
          out our monthly calendar of events for more details.
        </p>

        {/*{process.env.NODE_ENV === 'production' && (*/}
        {/*<div className="elfsight-app-b078d77e-2973-42a5-980d-a24ace8fee65" />*/}
        {/*)}*/}

        <div className="home-subscription">
          <SubscribeForm />
        </div>
      </div>
    );
  }
}

export default Home;
