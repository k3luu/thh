import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal, Box, Button } from 'gestalt';
import './Calendar.css';

BigCalendar.momentLocalizer(moment);

const GOOGLE_API_KEY = 'AIzaSyAy-Hn-2rmG7nmc2etp_hNdbLe_xFkpygw';
const CALENDAR_ID = 'r511go4f29gmulloe8fmh5ts8s@group.calendar.google.com';
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
        .then(() =>
          gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?orderBy=updated`
          })
        )
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
            that.setState({ isLoading: false });
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

    return (
      <Box paddingX={4} overflow="hidden">
        <Box display="flex" alignItems="center">
          <Box paddingX={4}>
            <i className="fa fa-calendar" />
          </Box>
          <div className="event-date__start">
            <div>{moment(event.start).format('ddd, MMM DD')}</div>
            <div>{moment(event.start).format('h:mm a')}</div>
          </div>
          <div className="event-date__separator" />
          <div className="event-date__end">
            <div>{moment(event.end).format('ddd, MMM DD')}</div>
            <div>{moment(event.end).format('h:mm a')}</div>
          </div>
        </Box>

        <div className="event-date__linebreak" />

        {event.desc && <div className="event-description">{event.desc}</div>}

        <div className="event-description">
          Add a description to your Google Events to make the modal more
          meaningful with content, like location, driving directions, meet-up
          spot.
        </div>
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

    console.log('events', events, [
      {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2015, 3, 0),
        end: new Date(2015, 3, 1)
      },
      {
        id: 1,
        title: 'Long Event',
        start: new Date(2015, 3, 7),
        end: new Date(2015, 3, 10)
      },

      {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 20, 0, 0, 0)
      }
    ]);

    return (
      <div>
        <BigCalendar
          events={events}
          views={allViews}
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
