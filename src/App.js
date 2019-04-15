import React, { useState, useEffect, useRef } from 'react'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

function formatSeconds(seconds) {}

export default function App() {
  const [sessionLength, setSessionLength] = useState(1500)
  const [breakLength, setBreakLength] = useState(300)
  const [timer, setTimer] = useState(1500)
  const [isTicking, setIsTicking] = useState(false)
  const [isWorkSession, setIsWorkSession] = useState(true)

  const handleClick = () => {
    isTicking ? pause() : start()
  }

  const start = () => {
    setIsTicking(true)

    // decide if timer is work or break, toggle
    // run setInterval function to decrement timer by 1 every second
    // if timer === 0
    // toggle isBreak / isSession
    // return
  }

  const pause = () => {
    setIsTicking(false)
    // pause setInterval timer function
  }

  return (
    <>
      <h3 id="timer-label">Session: {isWorkSession ? 'Work' : 'Break'}</h3>
      <h1 id="time-left">{timer}</h1>
      <button id="start_stop" onClick={handleClick}>
        {isTicking ? 'Pause' : 'Start'}
      </button>
      {!isTicking && <button id="reset">Reset</button>}

      <h3 id="break-label">Break Length</h3>
      <h4 id="break-length">{breakLength}</h4>
      <button
        id="break-decrement"
        onClick={() => setBreakLength(breakLength - 1)}
      >
        -
      </button>
      <button
        id="break-increment"
        onClick={() => setBreakLength(breakLength + 1)}
      >
        +
      </button>
      <h3 id="session-label">Session Length</h3>
      <h4 id="session-length">{sessionLength}</h4>
      <button
        id="session-decrement"
        onClick={() => setSessionLength(sessionLength - 1)}
      >
        -
      </button>
      <button
        id="break-decrement"
        onClick={() => setSessionLength(sessionLength - 1)}
      >
        +
      </button>
    </>
  )
}
