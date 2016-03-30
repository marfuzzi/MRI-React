import moment from 'moment'

import MEETING_ROOM_CONSTANTS from '../constants/meeting-room-constants'

export default (state = moment(), action) => {
  switch (action.type) {
    case MEETING_ROOM_CONSTANTS.TICK:
      return action.time
    default:
      return state
  }
}
