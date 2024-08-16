"use client"

import { useLayoutEffect, useState } from "react"
import Hand from "./Hand"
import "../app/stopwatch.css"
import getNumOrZero from "../utils/NumOrZero"

const DARK_MODE_className = 'dark-mode'
const LIGHT_MODE_className = 'light-mode'
const ONE_SECOND_MS = 1000
const ONE_MINUTE_MS = ONE_SECOND_MS * 60
const DEFAULT_ELAPSED = 0

const StopwatchAnalog = () => {
  const [ mode, setMode ] = useState(LIGHT_MODE_className)
  const [ elapsed, setElapsed ] = useState(DEFAULT_ELAPSED)
  const [ intervalId, setIntervalId ] = useState<any>(null)
  const [ isTicking, setIsTicking ] = useState(false)
  const [ startTime, setStartTime ] = useState<any>(null)

  const start = () => {
    if (!startTime) setStartTime(Date.now())
    setIsTicking(true)
  }
  
  const stop = () => {
    clearInterval(intervalId)
    setIntervalId(null)
    setIsTicking(false)
    setStartTime(null)
  }

  const reset = () => {
    stop()
    setElapsed(DEFAULT_ELAPSED)
  }

  const update = () => {
    const now = Date.now()
    setElapsed(now - startTime + elapsed)
  }
  
  const onSwitchMode = (nextMode: any) =>
     setMode(nextMode)
   
  useLayoutEffect(() => {
    if (!isTicking) return
    setIntervalId(setInterval(() => update(), 10))
  }, [isTicking])
 
  const wholeMinutesValue = getNumOrZero(elapsed / ONE_MINUTE_MS)
  const wholeMinutesInMs = wholeMinutesValue * ONE_MINUTE_MS
  const wholeSecondsValue = getNumOrZero((elapsed - wholeMinutesInMs) / ONE_SECOND_MS)
  const wholeSecondsInMs = wholeSecondsValue * ONE_SECOND_MS
  const millisecsValue = elapsed - wholeMinutesInMs - wholeSecondsInMs
  const minutesRotation = wholeMinutesValue * 6
  const secondsRotation = wholeSecondsValue * 6
  const millisecsRotation = millisecsValue * .36
  const elapsedFormatted = `${wholeMinutesValue.toString().padStart(2, '0')}:` +
    `${wholeSecondsValue.toString().padStart(2, '0')}:` +
    `${millisecsValue.toString().padStart(3, '0')}`

  const className = isTicking ? 'is-active': null
  
  let startButton
  
  if (!isTicking && elapsed !== DEFAULT_ELAPSED)
    startButton = <i className="fas fa-play"><span>Resume</span></i>
  else startButton = <i className="fas fa-play"><span>Start</span></i>

  
  return (
    <main className={`${className} ${mode}`}>
      <label className="mode-switch">
        <input id="mode-switch" type="checkbox" checked={mode === DARK_MODE_className} onChange={
            () => mode === LIGHT_MODE_className
              ? onSwitchMode(DARK_MODE_className)
              : onSwitchMode(LIGHT_MODE_className)
        } /> Dark Mode
      </label>
      <div className="clock">
        <Hand className="minute" value={minutesRotation} />
        <Hand className="second" value={secondsRotation} />
        {/* <Hand className="millisec" value={millisecsRotation} /> */}

        <span className="second-labels fifteen">15</span>
        <span className="second-labels thirty">30</span>
        <span className="second-labels fortyfive">45</span>
        <span className="second-labels sixty">60</span>

        <span className="millisec-labels twofifty">250</span>
        <span className="millisec-labels fivehundred">500</span>
        <span className="millisec-labels sevenfifty">750</span>
        <span className="millisec-labels onethousand">1000</span>
      </div>
      <p>
        <button className="start-lap" onClick={() => start()}>
          {startButton}
        </button>
        <button className="stop" onClick={() => stop()}><i className="fas fa-stop"><span>Stop</span></i></button>
        <button onClick={() => reset()}><i className="fas fa-undo"><span>Reset</span></i></button>
      </p>
      {/* <p>
        <div className="time elapsed">{ elapsedFormatted }</div>
      </p> */}
    </main>
  )
}

export default StopwatchAnalog;
