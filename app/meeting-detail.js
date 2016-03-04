import React from 'react';
import moment from 'moment';

export default class MeetingDetail extends React.Component{
    
    constructStatusMessage() {
        if (!this.props.isAvailable) return `Busy until ${moment(this.props.meeting.endTime).format('HH:mm')}`; 
        if (!this.props.meeting) return 'Free all day';
        return `Free until ${moment(this.props.meeting.startTime).format('HH:mm')}`;
    }
    
    render() {
        const statusMessage = this.constructStatusMessage();
        let organizerNode;
        if(this.props.meeting) organizerNode = <div className="subject">{this.props.meeting.organizer}</div>;
        
        return (
            <div className="meeting-room-content">
                <span className="status">
                    <div className="status-message">{statusMessage}</div>
                    {organizerNode}
                </span>
            </div>
        );
    }
}