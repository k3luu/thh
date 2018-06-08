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
          Be a part of Two Half-Hitches and join us we hit the trails! Hikes will be scheduled on a monthly basis and
          further details will provided (subject to updates). You will have the opportunity to be featured in our blog
          and connect with other outdoor enthusiasts. All are welcomed!
        </p>

        <Calendar />
      </div>
    );
  }
}

export default Events;
