import React from 'react';
import WeekCalendar from './components/weekcalendar';
import YearCalendar from './components/yearcalender'

import 'react-week-calendar/dist/style.css'

class MyComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {view: 'Week'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("Event:", event);
        this.setState({view: event});
    }
  
    handleSubmit(event) {
        alert('Filter was submitted: ' + this.state.value);
        event.preventDefault();
        //check if valid
        if(this.state.value !== "p@a.as"){
            this.setRedirect();
        }
    }
    render() {
        return (
        <div style={{marginLeft: "20px"}}>
            <div style={{display: "flex", justifyContent: 'space-between', marginBottom: '20px'}}>
                <div onClick={() => this.handleChange("Day")}>Day</div>
                <div onClick={() => this.handleChange("Week")}>Week</div>
                <div onClick={() => this.handleChange("Month")}>Month</div>
                <div onClick={() => this.handleChange("Year")}>Year</div>
            </div>
            Selected View: {this.state.view}
            { this.state.view === "Week" &&
            <WeekCalendar/>
            }
            { this.state.view === "Year" &&
            <YearCalendar/>
            }
        </div>)
    }
}
export default MyComponent