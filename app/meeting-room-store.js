import EventEmitter from 'events';

const CHANGE_EVENT = 'change';

class MeetingRoomStore extends EventEmitter {
    
    getAll() {
        return [
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
