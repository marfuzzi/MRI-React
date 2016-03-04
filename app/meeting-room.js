import React from 'react';
import moment from 'moment';

import MeetingRoomName from './meeting-room-name.js';
import MeetingDetail from './meeting-detail.js';

export default class MeetingRoom extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {meeting: {organizer: 'Tyler', startTime: 1457112240000, endTime: 1457119440000}};
    }
    
    calculateAvailability() {
        let isAvailable;
        if (!this.state.meeting) return true;
        if (moment(this.state.meeting.startTime).isBefore(moment())) return false;
        return true;
    }
    
    render() {
        const isAvailable = this.calculateAvailability();
        const classesProp = `room meeting-room-${this.props.room.name} ${isAvailable ? 'free-room' : 'busy-room'}`;
        
        return (
            <div className={classesProp}>
                <MeetingRoomName name={this.props.room.name} />    
                <MeetingDetail isAvailable={isAvailable} meeting={this.state.meeting} />
            </div>
        );
    }
}