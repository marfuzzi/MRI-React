// The inclusion of this top import upsets me a little and leads me to
// believe the package overrides for react-dom are not configured correctly.
import React from 'react';
import ReactDOM from 'react-dom';

import './schedule-polling-service.js';
import MeetingRoomApp from './components/meeting-room-app';

ReactDOM.render(
    <MeetingRoomApp />,
    document.getElementById('app-container')
);