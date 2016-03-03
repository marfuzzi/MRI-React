// The inclusion of this top import upsets me a little and leads me to
// believe the package overrides for react-dom are not configured correctly.
import React from 'react';
import ReactDOM from 'react-dom';

import MeetingRoom from './meeting-room.js';

ReactDOM.render(
    <div>
        <MeetingRoom name="1"/>
        <MeetingRoom name="2"/>
        <MeetingRoom name="3"/>
        <MeetingRoom name="4"/>
    </div>,
    document.getElementById('app-container')
);