import EventEmitter from 'events';
import moment from 'moment';

import MEETING_ROOM_CONSTANTS from '../constants/meeting-room-constants.js';
import MeetingRoomDispatcher from '../meeting-room-dispatcher.js';

const CHANGE_EVENT = 'change';
let time = moment();

class TimeStore extends EventEmitter {
    
    constructor() {
        super();
        MeetingRoomDispatcher.register(this.onActionReceived.bind(this));
    }
    
    onActionReceived(action) {
        switch (action.actionType) {
            case MEETING_ROOM_CONSTANTS.TICK: {
                this.updateTime(action.time);
                break;
            }
        }
    }
    
    updateTime(newTime) {
        time = newTime; 
        this.emitChange();
    }
    
    getTime() {
        return time;
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

export default new TimeStore();
