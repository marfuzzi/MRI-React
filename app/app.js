// The inclusion of this top import upsets me a little and leads me to
// believe the package overrides for react-dom are not configured correctly.
import React from 'react';
import ReactDOM from 'react-dom';

import MeetingRoom from './meeting-room.js';

const meetingRooms = [
            {
                email: 'a@here.com',
                name: "1"
            },
            {
                email: 'b@here.com',
                name: "2"
            },
            {
                email: 'c@here.com',
                name: "3"
            },
            {
                email: 'd@here.com',
                name: "4"
            }
        ];

ReactDOM.render(
    <div className="meeting-rooms">
        <MeetingRoom room={meetingRooms[0]} />
        <MeetingRoom room={meetingRooms[1]} />
        <MeetingRoom room={meetingRooms[2]} />
        <MeetingRoom room={meetingRooms[3]} />
    </div>,
    document.getElementById('app-container')
);