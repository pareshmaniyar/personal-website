import React from 'react';
import './year.css'
var {Calendar} = require('react-yearly-calendar');

function onDatePicked(date) {
  alert(date);
}

class MyComponent extends React.PureComponent {
    render() {
        return (
        <div style={{marginLeft: "20px"}}>
            <Calendar
                year={2018}
                onPickDate={onDatePicked}
            />
        </div>)
    }
}
export default MyComponent
