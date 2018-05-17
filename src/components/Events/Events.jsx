import React, { Component } from 'react';
import Calendar from 'react-calendar';
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

        <Calendar className="event-calendar" tileClassName="event-tile" />
        <iframe
          title="thh-event-calendar"
          src="https://calendar.google.com/calendar/b/1/embed?title=funsies&amp;showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=550&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=r511go4f29gmulloe8fmh5ts8s%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=America%2FLos_Angeles"
          width="710"
          height="550"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    );
  }
}

export default Events;
