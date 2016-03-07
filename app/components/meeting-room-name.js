import React from 'react';

export default class MeetingRoomName extends React.Component {
    
    render() {
        return <span className="meeting-room-name">{this.props.name}</span>;
    }
}