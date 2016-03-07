import React from 'react';
import moment from 'moment';

import MeetingRoomName from './meeting-room-name.js';
import MeetingDetail from './meeting-detail.js';

export default class MeetingRoom extends React.Component {
    
    isAvailable(nextMeeting) {
        if (!nextMeeting) return true;
        if (moment(nextMeeting.startTime).isBefore(moment())) return false;
        return true;
    }
    
    render() {
        const nextMeeting = this.props.room.schedule && this.props.room.schedule[0];
        let classesProp = `room meeting-room-${this.props.room.name}`;
        let isAvailable;
        
        if(nextMeeting !== null) {
            isAvailable = this.isAvailable(nextMeeting);
            classesProp += ` ${isAvailable ? 'free-room' : 'busy-room'}`;
        }
        
        return (
            <div className={classesProp}>
                <MeetingRoomName name={this.props.room.name} />    
                <MeetingDetail isAvailable={isAvailable} meeting={nextMeeting} />
            </div>
        );
    }
}