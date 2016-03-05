// The inclusion of this top import upsets me a little and leads me to
// believe the package overrides for react-dom are not configured correctly.
import React from 'react';
import ReactDOM from 'react-dom';

import MeetingRoomApp from './meeting-room-app';

ReactDOM.render(
    <MeetingRoomApp />,
    document.getElementById('app-container')
);