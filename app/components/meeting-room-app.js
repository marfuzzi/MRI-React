import React from 'react';

import MeetingRoom from './meeting-room.js';
import TimeDisplay from './time-display.js';
import MeetingRoomStore from '../stores/meeting-room-store.js';
import TimeStore from '../stores/time-store.js';

export default class MeetingRoomApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = this.getStartingState();
        this.onChange = () => {
            this.setState(this.getMeetingRoomStates());   
        }
        
        this.onTick = () => {
            this.setState({
                time: TimeStore.getTime()
            });    
        }
    }
    
    componentDidMount() {
        MeetingRoomStore.addChangeListener(this.onChange);
        TimeStore.addChangeListener(this.onTick);
    }
    
    componentWillUnmount() {
        MeetingRoomStore.removeChangeListener(this.onChange);
        TimeStore.removeChangeListener(this.onTick);
    }
    
    render() {
        const meetingRoomNodes = this.state.meetingRooms.map(meetingRoom => {
            return <MeetingRoom key={meetingRoom.name} room={meetingRoom} />
        });
        
        return (
            <div className="meeting-rooms">
                <div className="center-display">
                    <TimeDisplay time={this.state.time}/>
                    <img id="lobby-layout" src="assets/meeting-room.png"/>
                </div>
                {meetingRoomNodes}
            </div>
        );
    }
    
    getMeetingRoomStates() {
        return {
            meetingRooms: MeetingRoomStore.getAll()
        };
    }
    
    getStartingState() {
        return {
            meetingRooms: MeetingRoomStore.getAll(),
            time: TimeStore.getTime()
        }
    }
    
}