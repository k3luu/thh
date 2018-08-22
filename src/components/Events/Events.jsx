import React, { Component } from 'react';
import Calendar from '../Calendar/Calendar';
import './Event.css';

class Events extends Component {
  // Edit About component or pages/about.jsx to include your information.
  render() {
    return (
      <div className="main-content">
        <h1>Events</h1>
        <p>
          Join us as we hit the trails! Check our calendar of events for more
          details
        </p>

        <Calendar />
      </div>
    );
  }
}

export default Events;
