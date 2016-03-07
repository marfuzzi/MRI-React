import React from 'react';

import MeetingRoom from './meeting-room.js';
import MeetingRoomStore from './meeting-room-store.js';
        
export default class MeetingRoomApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = this.getMeetingRoomStates();
    }
    
    componentDidMount() {
        MeetingRoomStore.addChangeListener(this.onChange);
    }
    
    render() {
        const meetingRoomNodes = this.state.meetingRooms.map(meetingRoom => {
            return <MeetingRoom key={meetingRoom.name} room={meetingRoom} />
        });
        
        return (
            <div className="meeting-rooms">
                {meetingRoomNodes}
            </div>
        );
    }
    
    onChange() {
        this.setState(this.getMeetingRoomStates());
    }
    
    getMeetingRoomStates() {
        return {
            meetingRooms: MeetingRoomStore.getAll()
        };
    }
}