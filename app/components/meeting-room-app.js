import React from 'react';
import moment from 'moment';

import MeetingRoom from './meeting-room.js';
import TimeDisplay from './time-display.js';
import MeetingRoomStore from '../stores/meeting-room-store.js';
import MeetingRoomDispatcher from '../meeting-room-dispatcher.js';
import MEETING_ROOM_CONSTANTS from '../constants/meeting-room-constants.js';


export default class MeetingRoomApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = this.getStartingState();
        this.onChange = () => {
            this.setState(this.getMeetingRoomStates());   
        }
        
        this.onTick = action => {
            switch (action.actionType) {
                case MEETING_ROOM_CONSTANTS.TICK: {
                    this.setState({
                        time: action.time
                    });
                    break;                    
                }
            }
        }
    }
    
    componentDidMount() {
        MeetingRoomStore.addChangeListener(this.onChange);
        this.onTickToken = MeetingRoomDispatcher.register(this.onTick);
    }
    
    componentWillUnmount() {
        MeetingRoomStore.removeChangeListener(this.onChange);
        MeetingRoomDispatcher.unregister(this.onTickToken);
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
            time: moment()
        }
    }
    
}