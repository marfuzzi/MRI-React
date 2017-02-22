import React from 'react';

import moment from 'moment';

export default class NextMeetingDetail extends React.Component {
    
    render() {
        const startTime = moment(this.props.meeting.startTime).format('HH:mm');
        const endTime = moment(this.props.meeting.endTime).format('HH:mm');
        return (
            <div className="next-meeting-detail">
                <div>Next: {startTime} - {endTime}</div> 
                <div>{this.props.meeting.organizer}</div>
            </div>
        );
    }
}