/* global describe, it, beforeEach */

import { expect } from 'chai'
import { testing } from '../../TestUtils/TestUtils'

import actionCreator from '../actions/meeting-room-action-creator'

describe('rooms-reducer', () => {
  let roomsReducer
  beforeEach((done) => {
    testing('./app/stores/rooms-reducer').as('roomsReducer')
    .then(imported => {
      ({ roomsReducer } = imported)
    })
    .then(done)
  })

  const room1 = {
    name: 'room1',
    schedule: ['big meeting', 'important meeting'],
  }
  const room2 = { name: 'room2', schedule: [] }
  const rooms = [room2, room1]


  it('returns new schedule state when SCHEDULE_UPDATED action is dispatched', () => {
    const newSchedule = ['big meeting', 'important meeting', 'small meeting']
    const action = actionCreator.updateSchedule(room1, newSchedule)
    const updatedRoom = Object.assign({}, room1, { schedule: newSchedule })
    const updatedRooms = [room2, updatedRoom]
    expect(roomsReducer(rooms, action)).to.eql(updatedRooms)
  })

  it('returns current state when any action other than SCHEDULE_UPDATED is dispatched', () => {
    const action = actionCreator.tick()
    expect(roomsReducer(rooms, action)).to.eql(rooms)
  })

  it('current state default to empty array', () => {
    const action = actionCreator.tick()
    expect(roomsReducer(undefined, action)).to.eql([])
  })
})
