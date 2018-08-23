import React, { Component } from 'react';
import BannerTitle from '../BannerTitle/BannerTitle';
import Calendar from '../Calendar/Calendar';
import './Event.css';

class Events extends Component {
  // Edit About component or pages/about.jsx to include your information.
  render() {
    return (
      <div className="main-content">
        <BannerTitle
          title="Events"
          desc="Join us as we hit the trails! Check our calendar of events for more
                details"
        />

        <Calendar />
      </div>
    );
  }
}

export default Events;
