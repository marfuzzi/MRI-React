import React from 'react';
import moment from 'moment';

export default class MeetingDetail extends React.Component{

    render() {
        let statusMessage;
        let iconClassProp = 'fa icon';

        if (this.props.meeting === null) {
            statusMessage = "There's been a problem. Updates should be back soon.";
            iconClassProp += ' fa-question';
        } else if (!this.props.isAvailable) {
            statusMessage = `Busy until ${moment(this.props.meeting.endTime).format('HH:mm')}`;
            iconClassProp += ' fa-ban';
        } else if (!this.props.meeting) {
            statusMessage = 'Free all day';
            iconClassProp += ' fa-check';
        } else {
            statusMessage = `Free until ${moment(this.props.meeting.startTime).format('HH:mm')}`;
            iconClassProp += ' fa-check';
        }

        let organizerNode;
        if (this.props.meeting) organizerNode = <div className="subject">{this.props.meeting.organizer}</div>;

        return (
            <div className="meeting-room-content">
                <span className="status">
                    {organizerNode}
                    <div className={(this.props.meeting === null) ? 'error-message' : 'status-message'}>{statusMessage}</div>
                    <i className={iconClassProp}></i>
                </span>
            </div>
        );
    }
}