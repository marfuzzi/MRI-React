/* global describe, it, beforeEach */

import { expect } from 'chai'
import { mock, testing } from '../../TestUtils/TestUtils'

import actionCreator from '../actions/meeting-room-action-creator'

describe('time-reducer', () => {
  let timeReducer
  const moment = {
    default: () => 'new moment',
  }
  beforeEach((done) => {
    mock('moment', moment)
    testing('./app/stores/time-reducer').as('timeReducer')
    .then(imported => {
      ({ timeReducer } = imported)
    })
    .then(done)
  })

  it('returns new time state when TICK action is dispatched', () => {
    const action = actionCreator.tick('new time')
    expect(timeReducer('current state', action)).to.equal('new time')
  })

  it('returns current state when any action other than TICK is dispatched', () => {
    const action = actionCreator.updateSchedule()
    expect(timeReducer('current state', action)).to.equal('current state')
  })

  it('current state defaults to new moment', () => {
    const action = actionCreator.updateSchedule()
    expect(timeReducer(undefined, action)).to.equal('new moment')
  })
})
