import MEETING_ROOM_CONSTANTS from '../constants/meeting-room-constants'

export default (state = [], action) => {
  switch (action.type) {
    case MEETING_ROOM_CONSTANTS.SCHEDULE_UPDATED: {
      const index = state.findIndex(e => e.name === action.room.name)
      return [
        ...state.slice(0, index),
        { ...action.room, schedule: action.newSchedule },
        ...state.slice(index + 1),
      ]
    }
    default:
      return state
  }
}
