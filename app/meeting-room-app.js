import React from 'react';

import MeetingRoom from './meeting-room.js';

const meetingRooms = [
            {
                email: 'a@here.com',
                name: "1",
                schedule: [{organizer: 'Tyler', startTime: 1457112240000, endTime: 1457119440000}]
            },
            {
                email: 'b@here.com',
                name: "2",
                schedule: [{organizer: 'Bok', startTime: 1457112240000, endTime: 1457119440000}]
            },
            {
                email: 'c@here.com',
                name: "3",
                schedule: []
            },
            {
                email: 'd@here.com',
                name: "4",
                schedule: [{organizer: 'Steve', startTime: 1457112240000, endTime: 1457119440000}]
            }
        ];
        
export default class MeetingRoomApp extends React.Component {
    
    render() {
        return (
            <div className="meeting-rooms">
                <MeetingRoom room={meetingRooms[0]} />
                <MeetingRoom room={meetingRooms[1]} />
                <MeetingRoom room={meetingRooms[2]} />
                <MeetingRoom room={meetingRooms[3]} />
            </div>
        );
    }
}