import React from 'react';
import moment from 'moment';

import MeetingRoomName from './meeting-room-name.js';
import MeetingDetail from './meeting-detail.js';
import NextMeetingDetail from './next-meeting-detail.js';

export default class MeetingRoom extends React.Component {
    
    isAvailable(firstMeeting) {
        if (!firstMeeting) return true;
        if (moment(firstMeeting.startTime).isBefore(moment())) return false;
        return true;
    }
    
    render() {
        const firstMeeting = this.props.room.schedule && this.props.room.schedule[0];
        let classesProp = `room meeting-room-${this.props.room.name}`;
        let isAvailable;
        let nextMeetingNode;
        
        if(firstMeeting !== null) {
            isAvailable = this.isAvailable(firstMeeting);
            classesProp += ` ${isAvailable ? 'free-room' : 'busy-room'}`;
            
            if (!isAvailable) nextMeetingNode = <NextMeetingDetail meeting={this.props.room.schedule[1]}/>
        }
        
        return (
            <div className={classesProp}>
                <MeetingRoomName name={this.props.room.name} />    
                <MeetingDetail isAvailable={isAvailable} meeting={firstMeeting} />
                {nextMeetingNode}
            </div>
        );
    }
}