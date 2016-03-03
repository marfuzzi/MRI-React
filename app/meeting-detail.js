import React from 'react';

export default class MeetingDetail extends React.Component{
    
    render() {
        return (
            <span className="status">
                <div className="status-message">status message here</div>
                <div className="meeting-room-content">{this.props.meeting.organizer}</div>
            </span>
        );
    }
}