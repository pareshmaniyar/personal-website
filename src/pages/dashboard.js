import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import Calendar from './calender';
import Filters from './filters';
import MeetingsLayout from './meetingsLayout';

export default function Dashboard(props) {
    let location = useLocation();
    let email = location.state.id;
    return (
        <div className="blogs">
            <header style={{marginBottom: "40px"}}>
                Welcome, your email is {email}
                <Link to='/'>Log Out</Link>
            </header>
            <div style={{display: "flex", margin: "10px"}}>
                <div>
                    <Calendar/>
                    <Filters />
                </div>
                <MeetingsLayout/>
            </div>

        </div>
    )
}
