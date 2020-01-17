import React from 'react';
import CalendarView from 'react-calendar';

class Calendar extends React.Component {
    state = {
      date: new Date(),
    }
   
    onChange = date => this.setState({ date })
   
    render() {
      return (
        <div>
          <CalendarView
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
      );
    }
}
export default Calendar;