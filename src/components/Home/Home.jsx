import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Box, Image } from 'gestalt';
import PostListing from '../PostListing/PostListing';
import SubscribeForm from '../SubscribeButton/SubscribeForm';
import './Home.css';

class Home extends Component {
  render() {
    // console.log('trail guide', this.props);
    const { config } = this.props;

    return (
      <div id="home">
        <div className="main-content">
          <h2 className="home-title">Here to guide you through the outdoors</h2>
        </div>
        <div className="home-content">
          {/*<iframe*/}
          {/*title="thh-campaign"*/}
          {/*src="https://www.youtube.com/embed/05ifiSTb6Fc"*/}
          {/*frameBorder="0"*/}
          {/*allowFullScreen*/}
          {/*/>*/}

          <h4>Featured Content</h4>
          {/* PostListing component renders all the posts */}
          <PostListing postEdges={this.props.nodes} postAuthors={this.props.authorsEdges} />

          <Link to="/no-matter-the-mountain">
            <h4>Campaign</h4>
            <div className="home-banner">
              <Box shape="rounded" color="white" height={250}>
                <Image
                  alt="No Matter the Mountain"
                  color="rgb(231, 186, 176)"
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
            <a href="https://www.instagram.com/twohalfhitches" target="_blank" rel="noopener noreferrer">
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

          <Link to="/guides">
            <h4>Trail Guides</h4>
            <div className="home-banner">
              <Box shape="rounded" color="white" height={250}>
                <Image
                  alt="Trail Guides"
                  color="rgb(231, 186, 176)"
                  naturalHeight={1}
                  naturalWidth={1}
                  fit="cover"
                  src={config.guideCover}
                />
              </Box>
            </div>
          </Link>
          <p>
            Follow us on our most recent expeditions! The blog is our way of sharing our personal experiences to show
            readers how engaging and inspiring the outdoors can be. We provide reviews of trails, photos from our trip,
            and tips if you're planning on trekking the same trail.
          </p>

          <Link to="/trail-finder">
            <h4>Trail Finder</h4>
            <div className="home-banner">
              <Box shape="rounded" color="white" height={250}>
                <Image
                  alt="Trail Finder"
                  color="rgb(231, 186, 176)"
                  naturalHeight={1}
                  naturalWidth={1}
                  fit="cover"
                  src={config.finderCover}
                />
              </Box>
            </div>
          </Link>
          <p>
            Find a trail that best suits you based on your personal interest and level of experience! The map has over
            100 California trails plotted, and is designed to provide you with the basic information you will need to
            decide which is the right fit for you.
          </p>

          <Link to="/hiking">
            <h4>Fundamentals</h4>
            <div className="home-banner">
              <Box shape="rounded" color="white" height={250}>
                <Image
                  alt="Fundamentals"
                  color="rgb(231, 186, 176)"
                  naturalHeight={1}
                  naturalWidth={1}
                  fit="cover"
                  src={config.hikingCover}
                />
              </Box>
            </div>
          </Link>
          <p>
            Are you new to hiking, or need to brush up on your outdoor skills? Fundamentals gives you a breakdown of all
            sorts of skills you will want to know before you head out. Part of exploring is being adaptable, and
            understanding the way nature can shift. Be prepared for the unforeseen conditions the Great Outdoors will
            bring you.
          </p>

          <Link to="/events">
            <h4>Events</h4>
            <div className="home-banner">
              <Box shape="rounded" color="white" height={250}>
                <Image
                  alt="Events"
                  color="rgb(231, 186, 176)"
                  naturalHeight={1}
                  naturalWidth={1}
                  fit="cover"
                  src={config.eventCover}
                />
              </Box>
            </div>
          </Link>
          <p>
            Be a part of Two Half-Hitches and join us as we hit the trails! Check out our monthly calendar of events for
            more details.
          </p>

          <div className="home-subscription">
            <SubscribeForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
