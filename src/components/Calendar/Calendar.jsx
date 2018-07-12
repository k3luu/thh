import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Box, Button } from 'gestalt';
import './Calendar.css';

BigCalendar.momentLocalizer(moment);

const GOOGLE_API_KEY = 'AIzaSyAy-Hn-2rmG7nmc2etp_hNdbLe_xFkpygw';
const CALENDAR_ID = 'r511go4f29gmulloe8fmh5ts8s@group.calendar.google.com';
// const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
const allViews = {
  month: true,
  week: true,
  day: true,
  agenda: true
};

class Calendar extends Component {
  constructor(p) {
    super(p);

    this.state = {
      events: [],
      isLoading: true,
      showEventModal: false,
      currEvent: null
    };

    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  componentDidMount() {
    this.getEvents();
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
            path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?orderBy=updated`
            // path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?maxResults=11&orderBy=updated&timeMin=${moment().toISOString()}&timeMax=${moment()
            //   .endOf('day')
            //   .toISOString()}`
          });
        })
        .then(response => {
          const sortedEvents = response.result.items.sort((a, b) => {
            return (
              moment(b.start.dateTime).format('YYYYMMDD') -
              moment(a.start.dateTime).format('YYYYMMDD')
            );
          });

          let newEvents = [];

          if (sortedEvents.length > 0) {
            sortedEvents.map(e => {
              newEvents.push({
                id: e.id,
                allDay: !!e.start.date,
                title: e.summary,
                start: e.start.dateTime
                  ? new Date(e.start.dateTime)
                  : new Date(e.start.date).setDate(
                      new Date(e.start.date).getDate() + 1
                    ),
                end: e.end.dateTime
                  ? new Date(e.end.dateTime)
                  : new Date(e.end.date),
                desc: e.description
              });
            });

            that.setState({
              events: newEvents,
              isLoading: false
            });
          } else {
            that.setState({
              isLoading: false
            });
          }
        });
    }
    gapi.load('client', start);
  }

  isValidDate(dateString) {
    let regEx = /^\d{4}-\d{2}-\d{2}$/;
    return dateString.test(regEx) != null;
  }

  handleToggleModal() {
    this.setState({ showEventModal: !this.state.showEventModal });
  }

  handleEventDescription(event) {
    const multipleDaysFlag =
      moment(event.start).format('MMMM Do YYYY') !==
      moment(event.end).format('MMMM Do YYYY');

    let dateFormat;

    if (event.allDay || multipleDaysFlag)
      dateFormat =
        moment(event.start).format('dddd, MMMM Do') +
        ' - ' +
        moment(event.end).format('dddd, MMMM Do');
    else dateFormat = moment(event.start).format('dddd, MMMM Do');

    console.log(event, multipleDaysFlag);

    return (
      <Box paddingX={4} paddingY={2}>
        {multipleDaysFlag ? (
          <Box paddingX={4}>
            <Box display="flex" paddingY={1}>
              <i className="fa fa-calendar" />
              <Box marginLeft={5}>{dateFormat}</Box>
            </Box>
            <Box display="flex" paddingY={1}>
              <i className="fa fa-clock-o" />
              <Box marginLeft={5}>{moment(event.start).format('h:mm a')}</Box>
            </Box>
          </Box>
        ) : (
          <Box paddingX={4}>
            <Box display="flex" paddingY={1}>
              <i className="fa fa-calendar" />
              <Box marginLeft={5}>{dateFormat}</Box>
            </Box>
            <Box display="flex" paddingY={1}>
              <i className="fa fa-clock-o" />
              <Box marginLeft={5}>
                {moment(event.start).format('h:mm a')} -{' '}
                {moment(event.end).format('h:mm a')}
              </Box>
            </Box>
          </Box>
        )}

        {event.desc && <Box paddingY={2}>{event.desc}</Box>}
      </Box>
    );
  }

  handleEventModal() {
    const { showEventModal, currEvent } = this.state;

    if (showEventModal) {
      return (
        <div className="event-modal__container">
          <Modal
            accessibilityCloseLabel="close"
            accessibilityModalLabel={currEvent.title}
            heading={currEvent.title}
            onDismiss={this.handleToggleModal}
            footer={
              <Box display="flex" justifyContent="end">
                <Box padding={1}>
                  <Button
                    size="sm"
                    color="red"
                    text="Ok"
                    onClick={this.handleToggleModal}
                  />
                </Box>
              </Box>
            }
            role="dialog"
            size="md"
          >
            {this.handleEventDescription(currEvent)}
          </Modal>
        </div>
      );
    }
  }

  render() {
    const { events, isLoading } = this.state;
    console.log('events', events);

    if (isLoading)
      return (
        <div className="spinner__container">
          <div className="quiver">
            <span className="arrows st" />
            <span className="arrows nd" />
            <span className="arrows rd" />
            <span className="arrows th" />
            <span className="arrows fth" />
            <span className="loading">Loading</span>
          </div>
        </div>
      );

    return (
      <div>
        <BigCalendar
          popup
          events={events}
          formats={{
            dateFormat: 'D'
          }}
          views={allViews}
          step={60}
          showMultiDayTimes
          defaultDate={new Date()}
          onSelectEvent={event =>
            this.setState({ currEvent: event, showEventModal: true })
          }
        />

        {this.handleEventModal()}
      </div>
    );
  }
}

export default Calendar;
