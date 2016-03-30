import { createStore, combineReducers } from 'redux'

import rooms from './rooms-reducer'
import time from './time-reducer'
import MEETING_ROOMS from '../app-config/rooms-config.js'

const reducer = combineReducers({
  rooms,
  time,
})

const roomsInitialState = MEETING_ROOMS.map(ROOM => {
  return {
    email: ROOM.email,
    name: ROOM.name,
    schedule: null,
  }
})

export default createStore(reducer, { rooms: roomsInitialState })
