import React, { Component } from 'react';
import './Trails.css';

class TrailFinder extends Component {
  // Edit About component or pages/about.jsx to include your information.
  render() {
    return (
      <div className="about">
        <h1>Trail Finder</h1>
        <p>
          Find a trail that best suits you based on your personal interest and level of experience! The map has over 100
          California trails plotted, and is designed to provide you with the basic information you'll need to decide
          which is the right fit for you. The trail map is constantly being updated, so keep an eye out for new trails!
        </p>
        <p>
          The pins on the map are color-coded, and indicate the difficulty of the trail. Open the Legend by clicking on
          the icon at the top left corner. There you will be able to filter out trails by location. By clicking on the
          pin, the Legend will automatically open up and provide you with further details, including: Trail Name, Area,
          Distance, Difficulty, Elevation Gain, and Season.
        </p>
        <p>If you have a particular trail you recommend, please contact us and we will mark it on the map!</p>
      </div>
    );
  }
}

export default TrailFinder;
