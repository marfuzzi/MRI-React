import React from 'react';

import MeetingRoomName from './meeting-room-name.js';

export default class MeetingRoom extends React.Component {
    
    render() {
        
        const classesProp = `room meeting-room-${this.props.room.name}`;
        
        return (
            <div className={classesProp}>
                <MeetingRoomName name={this.props.room.name} />    
            </div>
        );
    }
}