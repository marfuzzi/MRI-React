import MEETING_ROOM_CONSTANTS from '../constants/meeting-room-constants'

class MeetingRoomActions {

  updateSchedule(room, schedule) {
    return {
      type: MEETING_ROOM_CONSTANTS.SCHEDULE_UPDATED,
      room,
      newSchedule: schedule,
    }
  }

  tick(time) {
    return {
      type: MEETING_ROOM_CONSTANTS.TICK,
      time,
    }
  }
}

export default new MeetingRoomActions()
