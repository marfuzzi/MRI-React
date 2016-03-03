import React from 'react';

export default class MeetingRoom extends React.Component {
    
    render() {
        
        const classesProp = `room meeting-room-${this.props.room.name}`;
        
        return (
            <div className={classesProp}>
                {this.props.room.name}
            </div>
        );
    }
}