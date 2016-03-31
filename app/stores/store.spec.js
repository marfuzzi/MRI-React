/* global describe, it, beforeEach, afterEach */

import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mock, testing } from '../../TestUtils/TestUtils'
chai.use(sinonChai)

describe('store', () => {
  let store
  const createStore = sinon.spy()
  const combineReducers = sinon.stub().returns('combined reducer')
  const redux = {
    createStore,
    combineReducers,
  }
  const roomsReducer = { default: 'rooms-reducer' }
  const timeReducer = { default: 'time-reducer' }
  const rooms = [{ email: 'email', name: 'name', schedule: null }]
  const roomsConfig = { default: rooms }

  beforeEach((done) => {
    mock('redux', redux)
    mock('./app/stores/rooms-reducer', roomsReducer)
    mock('./app/stores/time-reducer', timeReducer)
    mock('./app/app-config/rooms-config', roomsConfig)
    testing('./app/stores/store').as('store')
    .then(imported => {
      ({ store } = imported)
    })
    .then(done)
  })

  afterEach(() => {
    createStore.reset()
    combineReducers.reset()
  })

  it('combines the rooms-reducer and time-reducer into one reducer', () => {
    expect(combineReducers).to.have.been.calledWith({
      rooms: roomsReducer.default,
      time: timeReducer.default,
    })
  })

  it('creates a store with combined reducer and initial state set to meeting rooms without schedules', () => {
    expect(createStore).to.have.been.calledWith('combined reducer', { rooms })
  })
})
