import MeetingRoomDispatcher from '../meeting-room-dispatcher.js';
import MEETING_ROOM_CONSTANTS from '../constants/meeting-room-constants.js';

class MeetingRoomActions {
    
    updateSchedule(room, schedule) {
        MeetingRoomDispatcher.dispatch({
            actionType: MEETING_ROOM_CONSTANTS.SCHEDULE_UPDATED,
            room: room,
            newSchedule: schedule  
        });
    }
}

export default new MeetingRoomActions();