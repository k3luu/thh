import React, { Component } from 'react';
import moment from 'moment';

const GOOGLE_API_KEY = 'AIzaSyAy-Hn-2rmG7nmc2etp_hNdbLe_xFkpygw',
  CALENDAR_ID = 'r511go4f29gmulloe8fmh5ts8s@group.calendar.google.com';

class Calendar extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.getEvents();
    // setInterval(() => {
    //   this.getEvents();
    // }, 60000);
  }

  getEvents() {
    let that = this;
    function start() {
      gapi.client
        .init({
          apiKey: GOOGLE_API_KEY
        })
        .then(function() {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?maxResults=11&orderBy=updated`
            // path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?maxResults=11&orderBy=updated&timeMin=${moment().toISOString()}&timeMax=${moment()
            //   .endOf('day')
            //   .toISOString()}`
          });
        })
        .then(
          response => {
            let events = response.result.items;
            let sortedEvents = events.sort(function(a, b) {
              return moment(b.start.dateTime).format('YYYYMMDD') - moment(a.start.dateTime).format('YYYYMMDD');
            });
            console.log(sortedEvents);
            if (events.length > 0) {
              that.setState(
                {
                  events: sortedEvents,
                  isLoading: false,
                  isEmpty: false
                },
                () => {
                  console.log(that.state.events);
                }
              );
            } else {
              that.setState({
                isEmpty: true,
                isLoading: false
              });
            }
          },
          function(reason) {
            console.log(reason);
          }
        );
    }
    gapi.load('client', start);
  }

  render() {
    const { time, events } = this.state;

    let eventsList = events.map(function(event) {
      return (
        <a className="list-group-item" href={event.htmlLink} target="_blank" key={event.id}>
          {event.summary}{' '}
          <div className="badge">
            {moment(event.start.dateTime).format('h:mm a')} - {moment(event.end.dateTime).format('h:mm a')},{' '}
            {moment(event.start.dateTime).format('MMMM Do')}{' '}
          </div>
        </a>
      );
    });

    return (
      <div>
        <h1>hi</h1>
        {events.length > 0 && eventsList}
      </div>
    );
  }
}

export default Calendar;
