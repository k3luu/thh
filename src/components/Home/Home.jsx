import React, { Component } from 'react';
import './Home.css';
import PostListing from '../PostListing/PostListing';

class Home extends Component {
  render() {
    // console.log('trail guide', this.props);
    return (
      <div className="home" id="home">
        <h2>Here to guide you through the outdoors</h2>
        <h5>How Do You Conquer Your Mountain?</h5>
        <iframe title="thh-campaign" src="https://www.youtube.com/embed/05ifiSTb6Fc" frameBorder="0" allowFullScreen />
        <p>
          Share your story with us on Instagram! Nominate your friends, and tag{' '}
          <a href="https://www.instagram.com/twohalfhitches" target="_blank">
            @twohalfhitches
          </a>{' '}
          and{' '}
          <a href="https://www.instagram.com/explore/tags/nomatterthemountain/" target="_blank">
            #NoMattertheMountain
          </a>.
        </p>

        <h4>Featured Content</h4>

        {/* PostListing component renders all the posts */}
        <PostListing postEdges={this.props.nodes} postAuthors={this.props.authorsEdges} />

        <h4>Trail Guides</h4>
        <p>
          Follow us on our most recent expeditions! The blog is our way of sharing our personal experiences to show
          readers how engaging and inspiring the outdoors can be. We provide reviews of trails, photos from our trip,
          and tips if you're planning on trekking the same trail.
        </p>

        <h4>Trail Finder</h4>
        <p>
          Find a trail that best suits you based on your personal interest and level of experience! The map has over 100
          California trails plotted, and is designed to provide you with the basic information you will need to decide
          which is the right fit for you.
        </p>

        <h4>Fundamentals</h4>
        <p>
          Are you new to hiking, or need to brush up on your outdoor skills? Fundamentals gives you a breakdown of all
          sorts of skills you will want to know before you head out. Part of exploring is being adaptable, and
          understanding the way nature can shift. Be prepared for the unforeseen conditions the Great Outdoors will
          bring you.
        </p>

        <h4>Events</h4>
        <p>
          Be a part of Two Half-Hitches and join us as we hit the trails! Check out our monthly calendar of events for
          more details.
        </p>
      </div>
    );
  }
}

export default Home;
