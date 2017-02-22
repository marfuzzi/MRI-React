import React from 'react';

export default class TimeDisplay extends React.Component {
    
    render() {
        return (
            <span id="time-display">
                {this.props.time.format("HH:mm")}
            </span>
        );
    }
}