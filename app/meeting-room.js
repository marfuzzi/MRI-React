import React from 'react';

export default class MeetingRoom extends React.Component {
    
    render() {
        return (
            <div>
                {this.props.room.name}
            </div>
        );
    }
}