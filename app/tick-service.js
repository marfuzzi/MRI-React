import moment from 'moment'
import store from '../stores/store'


import MeetingRoomActions from './actions/meeting-room-action-creator.js'

class TickService {

  start(interval) {
    this.tick()
    window.setInterval(() => {
      this.tick()
    }, interval)
  }

  tick() {
    store.dispatch(MeetingRoomActions.tick(new moment()))
  }
}

const tickService = new TickService()
tickService.start(10000)

export default tickService

