import React from 'react';

import MeetingRoomName from './meeting-room-name.js';
import MeetingDetail from './meeting-detail.js';

export default class MeetingRoom extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {meeting: {organizer: 'Tyler', startTime: 1, endTime: 4}};
    }
    
    render() {
        
        const classesProp = `room meeting-room-${this.props.room.name}`;
        
        return (
            <div className={classesProp}>
                <MeetingRoomName name={this.props.room.name} />    
                <MeetingDetail meeting={this.state.meeting} />
            </div>
        );
    }
}