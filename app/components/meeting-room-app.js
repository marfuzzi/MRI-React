import React from 'react'
import { connect } from 'react-redux'

import MeetingRoom from './meeting-room'
import TimeDisplay from './time-display'

export const MeetingRoomApp = ({ rooms, time }) => (
  <div className="meeting-rooms">
    <div className="center-display">
      <TimeDisplay time={time} />
      <img id="lobby-layout" src="assets/meeting-room.png" />
    </div>
    {rooms.map(room => <MeetingRoom key={room.name} room={room} />)}
  </div>
)

function mapStateToProps(state) {
  return state
}

export default connect(
  mapStateToProps
)(MeetingRoomApp)
