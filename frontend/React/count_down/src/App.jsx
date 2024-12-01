import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  let interval;
  let time;
  let startTimer = () => {
    time = parseInt(inputRef.current.value);
    inputRef.current.style.display = "none";
    interval = setInterval(() => {
      if (time > 0) {
        outputRef.current.innerHTML = `${Math.floor(time / 60)} : ${time % 60}`;
        time--;
      } else {
        outputRef.current.innerHTML = `Time's Up`;
      }
    }, 1000);
  };
  let restart = () => {
    clearInterval(interval);
    outputRef.current.innerHTML = null;
    inputRef.current.style.display = "block";
    time = 0;
    inputRef.current.value = time;
  };
  let stop = () => {
    clearInterval(interval);
    inputRef.current.value = time;
  };
  return (
    <>
      <div className="conatiner">
        <h1>Countdown</h1>
        <div className="time-box" id="time-box">
          <div className="time-output" id="time-output" ref={outputRef}>
          </div>
          <input id="input-sec" ref={inputRef} type="number" className="input-sec" />
        </div>
        <div className="button-container">
          <button onClick={startTimer}>Start</button>
          <div className="icon">
            <button onClick={restart}>Restart</button>
          </div>
          <button onClick={stop}>stop</button>
        </div>
      </div>
    </>
  );
}

export default App;
