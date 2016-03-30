// The inclusion of this top import upsets me a little and leads me to
// believe the package overrides for react-dom are not configured correctly.
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './schedule-polling-service'
import './tick-service'
import MeetingRoomApp from './components/meeting-room-app'
import store from './stores/store'

ReactDOM.render(
    <Provider store={store}>
        <MeetingRoomApp />
    </Provider>,
    document.getElementById('app-container')
)
