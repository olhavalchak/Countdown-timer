import React, { useEffect,useState } from 'react';
// import { PropTypes } from 'react';
function App( { date }) {
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);

  const birthday = new Date(date.replace(/\s/, 'T')).getTime();
  const present = new Date().getTime();
  const [difference,setDifference] = useState(birthday - present);
  useEffect (() => {
    const interval = setInterval(
      () => {
        setDifference(birthday - present);
        
        if ( days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          setDifference(0);
        }
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
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
// App.PropTypes = {
//   date: PropTypes.stri
// }
export default App;
