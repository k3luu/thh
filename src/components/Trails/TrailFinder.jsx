import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import './Trails.css';

class TrailFinder extends Component {
  // Edit About component or pages/about.jsx to include your information.
  render() {
    return (
      <div className="main-content">
        <h1>Trail Finder</h1>
        <p>
          Find a trail that best suits you based on your personal interest and level of experience! The map has over 100
          California trails plotted, and is designed to provide you with the basic information you'll need to decide
          which is the right fit for you. The trail map is constantly being updated, so keep an eye out for new trails!
        </p>
        <p>
          Open the legend in the top left corner to filter trails by location. By clicking on the pin, the Legend will
          automatically open up and provide you with further details, including: Trail Name, Area, Distance, Difficulty,
          Elevation Gain, and Season.
        </p>

        <h5>Difficulty Level</h5>
        <div className="trail-pin__container">
          <div>
            <div className="trail-pin">
              <img
                src="https://mt.googleapis.com/vt/icon/name=icons/onion/1493-wht-blank_maps-4x.png&filter=ff4186F0"
                alt="blue-pin"
              />
              Easy
            </div>
            <div className="trail-pin">
              <img
                src="https://mt.googleapis.com/vt/icon/name=icons/onion/1493-wht-blank_maps-4x.png&filter=ff62AF44"
                alt="green-pin"
              />
              Easy/Moderate
            </div>
            <div className="trail-pin">
              <img
                src="https://mt.googleapis.com/vt/icon/name=icons/onion/1493-wht-blank_maps-4x.png&filter=ffF4B400"
                alt="yellow-pin"
              />
              Moderate
            </div>
          </div>

          <div>
            <div className="trail-pin">
              <img
                src="https://mt.googleapis.com/vt/icon/name=icons/onion/1493-wht-blank_maps-4x.png&filter=ffF8971B"
                alt="orange-pin"
              />
              Moderate/Difficult
            </div>
            <div className="trail-pin">
              <img
                src="https://mt.googleapis.com/vt/icon/name=icons/onion/1493-wht-blank_maps-4x.png&filter=ffDB4436"
                alt="red-pin"
              />
              Difficult
            </div>
          </div>
        </div>
        <iframe
          title="thh-map"
          src="https://www.google.com/maps/d/embed?mid=1sCNANxiTadBW6BQmQ-lF71kYEm4"
          width="710"
          height="480"
        />
        <p>If you have a particular trail you recommend, let us know by filling out the form below!</p>

        <Contact />
      </div>
    );
  }
}

export default TrailFinder;
