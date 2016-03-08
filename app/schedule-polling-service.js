import $ from 'jquery';
import moment from 'moment';

import MEETING_ROOMS from './app-config/rooms-config.js';
import MeetingRoomActions from './actions/meeting-room-action-creator.js';

class SchedulePollingService {
    
    poll(room, interval) {
        this.get(room);
        window.setInterval(() => {
            this.get(room);
        }, interval);
    }
    
    get(room) {
        const url = "/office365/users/" + room.email + "/calendarview?startdatetime=" + moment().toISOString() + "&enddatetime=" + moment().endOf('day').toISOString() + "&$orderby=Start&$filter=IsCancelled eq false";   
        return $.get(url)
            .done(response => {
                return response.value
            })
            .fail(error => {
                console.log(error);
                return null;
            })
            .always((data) => {
                MeetingRoomActions.updateSchedule(room, data.value.map(meeting => {
                    return {
                        organizer: meeting.Organizer.EmailAddress.Name,
                        startTime: meeting.Start,
                        endTime: meeting.End
                    };
                }));
            });
    }
}

const pollingService = new SchedulePollingService();

MEETING_ROOMS.forEach(ROOM => {
    pollingService.poll(ROOM, 10000);
});

export default pollingService;

