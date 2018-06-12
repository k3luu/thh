import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

BigCalendar.momentLocalizer(moment);

const GOOGLE_API_KEY = 'AIzaSyAy-Hn-2rmG7nmc2etp_hNdbLe_xFkpygw',
  CALENDAR_ID = 'r511go4f29gmulloe8fmh5ts8s@group.calendar.google.com';

const calEvents = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1)
  }
];

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

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

  isValidDate(dateString) {
    let regEx = /^\d{4}-\d{2}-\d{2}$/;
    return dateString.test(regEx) != null;
  }

  /**
   * function from user @sivafass, package: react-meeting-room
   */
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
              sortedEvents.map(e => {
                calEvents.push({
                  id: e.id,
                  allDay: !!e.start.date,
                  title: e.summary,
                  start: e.start.dateTime
                    ? new Date(e.start.dateTime)
                    : new Date(e.start.date).setDate(new Date(e.start.date).getDate() + 1),
                  end: e.end.dateTime ? new Date(e.end.dateTime) : new Date(e.end.date),
                  desc: e.description
                });
              });

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
    console.log('events', calEvents);

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
      <BigCalendar popup events={calEvents} views={allViews} step={60} showMultiDayTimes defaultDate={new Date()} />
    );
  }
}

export default Calendar;
