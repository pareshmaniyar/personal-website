import React from 'react';
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css'
class MyComponent extends React.PureComponent {
    render() {
        return (
        <div style={{marginLeft: "20px"}}>
            <WeekCalendar/>
        </div>)
    }
}
export default MyComponent