import React from 'react'
import "../app/timer-analog-two.css"

function TimerAnalogTwo({ remainingTime }: any) {

    if (remainingTime === 0) {
        return <div className="timer">End</div>;
    }

    return (
    <div>
        <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
    </div>
    </div>
    )
}

export default TimerAnalogTwo