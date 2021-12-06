import React, { useEffect,useState } from 'react';
function App() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const birthday = new Date("Dec 08,2022 16:57:00").getTime();
  const present = new Date().getTime();
  const [difference,setDifference] = useState(birthday - present);

  const addYear = () => {
    setDifference(birthday - present);
    setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((difference / 1000 / 60) % 60));
    setSeconds(Math.floor((difference / 1000) % 60));
    console.log(difference);
  }

  useEffect (() => {
    const interval = setInterval(addYear, 1000);
    // console.log(seconds);
    return () => {
      clearInterval(interval);
    }
  }, [difference])
  return (
    <div className="container">
      <div className="timer-container">
        <div className="title"> 
          <span className="its">It's</span>
          <div className="border">
            <div className ="time-numbers">
              <span>{days}</span>
              <span> : </span>
              <span>{hours}</span>
              <span> : </span>
              <span>{minutes}</span>
              <span> : </span>
              <span>{seconds}</span>
            </div>
            <div className="time-words">
              <span>days</span>
              <span> : </span>
              <span>hours</span>
              <span> : </span>
              <span>minutes</span>
              <span> : </span>
              <span>seconds</span>
            </div>
          </div>
          <div>untill your next birthday</div>
        </div>
      </div>
    </div>
  );
}

export default App;
