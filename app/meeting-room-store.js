import EventEmitter from 'events';
import moment from 'moment';
import $ from 'jquery';

import MEETING_ROOM_CONFIG from './rooms-config.js';

const CHANGE_EVENT = 'change';
const meetingRooms = [
            {
                email: MEETING_ROOM_CONFIG.ROOM_1.email,
                name: MEETING_ROOM_CONFIG.ROOM_1.name,
                schedule: null
            },
            {
                email: MEETING_ROOM_CONFIG.ROOM_2.email,
                name: MEETING_ROOM_CONFIG.ROOM_2.name,
                schedule: null
            },
            {
                email: MEETING_ROOM_CONFIG.ROOM_3.email,
                name: MEETING_ROOM_CONFIG.ROOM_3.name,
                schedule: null
            },
            {
                email: MEETING_ROOM_CONFIG.ROOM_4.email,
                name: MEETING_ROOM_CONFIG.ROOM_4.name,
                schedule: null
            }
        ];

class MeetingRoomStore extends EventEmitter {
    
    constructor() {
        super();
        this.updateSchedules();
        window.setInterval(() => {
            this.updateSchedules();
        }, 10000);
    }
    
    updateSchedules() {
        meetingRooms.forEach(room => {
            this.getSchedule(room.email)
                .done(data => {
                    room.schedule = data.value.map(apiMeeting => {
                        return {
                            organizer: apiMeeting.Organizer.EmailAddress.Name,
                            startTime: apiMeeting.Start,
                            endTime: apiMeeting.End
                        };
                });
            });
        });
        this.emitChange();        
    }
    
    getAll() {
        return meetingRooms;
    };
    
    getSchedule(email) {
        return $.get("/office365/users/" + email + "/calendarview?startdatetime=" + moment().toISOString() + "&enddatetime=" + moment().endOf('day').toISOString() + "&$orderby=Start&$filter=IsCancelled eq false")
            .done(response => {
                return response.value
            })
            .fail(error => {
                console.log(error);
                return null;
            });
    }
    
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    
    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb);
    }
    
    removeChangeListener(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }
}

export default new MeetingRoomStore();
