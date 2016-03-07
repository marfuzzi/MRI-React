import React from 'react';

import MeetingRoom from './meeting-room.js';
import MeetingRoomStore from './meeting-room-store.js';

export default class MeetingRoomApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = this.getMeetingRoomStates();
        this.onChange = () => {
            this.setState(this.getMeetingRoomStates());   
        }
    }
    
    componentDidMount() {
        MeetingRoomStore.addChangeListener(this.onChange);
    }
    
    componentWillUnmount() {
        MeetingRoomStore.removeChangeListener(this.onChange);
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
    
    getMeetingRoomStates() {
        return {
            meetingRooms: MeetingRoomStore.getAll()
        };
    }
}