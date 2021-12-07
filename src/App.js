import React, { useEffect,useState } from 'react';

function App({ date }) {

  const birthday = new Date(date.toString('YYYY-MM-dd')).getTime();

  const [difference,setDifference] = useState(birthday - new Date().getTime());
  const [days, setDays] = useState(Math.floor(difference / (1000 * 60 * 60 * 24)));
  const [hours, setHours] = useState(Math.floor((difference / (1000 * 60 * 60)) % 24));
  const [minutes, setMinutes] = useState(Math.floor((difference / 1000 / 60) % 60));
  const [seconds, setSeconds] = useState(Math.floor((difference / 1000) % 60));
  const present = new Date().getTime();

  useEffect (() => {
    const interval = setInterval(
      () => {
        const diff = birthday - present;
        setDifference(diff);
        console.log(birthday, present);
        if ( days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          setDifference(0);
        }
        setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((diff / 1000 / 60) % 60));
        setSeconds(Math.floor((diff / 1000) % 60));
      }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [birthday, days, difference, hours, minutes, present, seconds])
  
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
