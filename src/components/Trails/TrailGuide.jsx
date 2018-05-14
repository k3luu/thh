import React, { Component } from 'react';
import './Trails.css';

class TrailGuide extends Component {
  render() {
    // console.log('trail guide', this.props);
    return (
      <div className="about">
        <h1>Trail Guides</h1>
        <p>
          Follow us on our most recent expeditions! The blog is our way of sharing our personal experiences to show
          readers how engaging and inspiring the outdoors can be. We provide reviews of trails, photos from our trip,
          and tips if you're planning on trekking the same trail. We understand that getting out there can seem
          daunting, but hopefully by sharing our experiences you can benefit by having a clear view of what to expect
          going into your adventure.
        </p>
      </div>
    );
  }
}

export default TrailGuide;
