import EventEmitter from 'events';
import moment from 'moment';
import $ from 'jquery';

const CHANGE_EVENT = 'change';
const meetingRooms = [
            {
                email: 'a@here.com',
                name: "1",
                schedule: null
            },
            {
                email: 'b@here.com',
                name: "2",
                schedule: null
            },
            {
                email: 'c@here.com',
                name: "3",
                schedule: null
            },
            {
                email: 'd@here.com',
                name: "4",
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
        var now = moment();
        var start = now.toISOString();
        var end = now.endOf('day');
        return $.get("/office365/users/" + email + "/calendarview?startdatetime=" + start + "&enddatetime=" + end.toISOString() + "&$orderby=Start&$filter=IsCancelled eq false")
            .done(response => {
                return response.value
            })
            .fail(error => {
                console.log(error);
                return null
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
