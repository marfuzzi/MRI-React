import React from 'react';
import moment from 'moment';

export default class MeetingDetail extends React.Component{
    
    render() {
        let statusMessage;
        if (!this.props.meeting) statusMessage = 'Free all day';
        else if (moment(this.props.meeting.startTime).isBefore(moment())) statusMessage = `Busy until ${moment(this.props.meeting.endTime).format('HH:mm')}`;
        else statusMessage = `Free until ${moment(this.props.meeting.startTime).format('HH;mm')}`;
        
        return (
            <span className="status">
                <div className="status-message">{statusMessage}</div>
                <div className="meeting-room-content">{this.props.meeting.organizer}</div>
            </span>
        );
    }
}