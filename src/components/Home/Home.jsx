import React, { Component } from 'react';
import Link from 'gatsby-link';
import PostListing from '../PostListing/PostListing';
import './Home.css';

class Home extends Component {
  render() {
    // console.log('trail guide', this.props);
    return (
      <div id="home">
        <div className="main-content">
          <h1 className="home-title">Here to guide you through the outdoors</h1>
        </div>
        <div className="home-content">
          <iframe
            title="thh-campaign"
            src="https://www.youtube.com/embed/05ifiSTb6Fc"
            frameBorder="0"
            allowFullScreen
          />
          <p className="home-title">
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

          <h5>Featured Content</h5>

          {/* PostListing component renders all the posts */}
          <PostListing postEdges={this.props.nodes} postAuthors={this.props.authorsEdges} />
        </div>

        <Link to="/guides">
          <h5>Trail Guides</h5>
        </Link>
        <p>
          Follow us on our most recent expeditions! The blog is our way of sharing our personal experiences to show
          readers how engaging and inspiring the outdoors can be. We provide reviews of trails, photos from our trip,
          and tips if you're planning on trekking the same trail.
        </p>

        <Link to="/trail-finder">
          <h5>Trail Finder</h5>
        </Link>
        <p>
          Find a trail that best suits you based on your personal interest and level of experience! The map has over 100
          California trails plotted, and is designed to provide you with the basic information you will need to decide
          which is the right fit for you.
        </p>

        <Link to="/hiking">
          <h5>Fundamentals</h5>
        </Link>
        <p>
          Are you new to hiking, or need to brush up on your outdoor skills? Fundamentals gives you a breakdown of all
          sorts of skills you will want to know before you head out. Part of exploring is being adaptable, and
          understanding the way nature can shift. Be prepared for the unforeseen conditions the Great Outdoors will
          bring you.
        </p>

        <Link to="/events">
          <h5>Events</h5>
        </Link>
        <p>
          Be a part of Two Half-Hitches and join us as we hit the trails! Check out our monthly calendar of events for
          more details.
        </p>
      </div>
    );
  }
}

export default Home;
