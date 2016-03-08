import EventEmitter from 'events';

import MEETING_ROOMS from '../app-config/rooms-config.js';
import MeetingRoomDispatcher from '../meeting-room-dispatcher.js';

const CHANGE_EVENT = 'change';
const meetingRooms = MEETING_ROOMS.map(ROOM => {
    return {
        email: ROOM.email,
        name: ROOM.name,
        schedule: null
    };
});

class MeetingRoomStore extends EventEmitter {
    
    constructor() {
        super();
        MeetingRoomDispatcher.register(this.onActionReceived.bind(this));
    }
    
    onActionReceived(action) {
        switch (action.actionType) {
            case 'SCHEDULE_UPDATED': {
                this.updateSchedule(action.room, action.newSchedule);
                break;
            }
        }
    }
    
    updateSchedule(room, newSchedule) {
        meetingRooms.find(r => r.name === room.name)
            .schedule = newSchedule;
            
        this.emitChange();
    }
    
    getAll() {
        return meetingRooms;
    };
    
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
