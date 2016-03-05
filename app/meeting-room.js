import React from 'react';
import moment from 'moment';

import MeetingRoomName from './meeting-room-name.js';
import MeetingDetail from './meeting-detail.js';

export default class MeetingRoom extends React.Component {
    
    constructor(props) {
        super(props)
        this.nextMeeting = props.room.schedule[0];  
    }
    
    get isAvailable() {
        if (!this.nextMeeting) return true;
        if (moment(this.nextMeeting.startTime).isBefore(moment())) return false;
        return true;
    }
    
    render() {
        const isAvailable = this.isAvailable;
        const classesProp = `room meeting-room-${this.props.room.name} ${isAvailable ? 'free-room' : 'busy-room'}`;
        
        return (
            <div className={classesProp}>
                <MeetingRoomName name={this.props.room.name} />    
                <MeetingDetail isAvailable={isAvailable} meeting={this.nextMeeting} />
            </div>
        );
    }
}