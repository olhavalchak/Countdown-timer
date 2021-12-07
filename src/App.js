import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';

function App({ date }) {

  const birthday = new Date(date.toString('YYYY-MM-dd')).getTime();
  
  const calculateTime = () => { 
      const present = new Date().getTime();
      const diff = birthday - present;
      if ( diff <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      } else {
          return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / 1000 / 60) % 60),
            seconds: Math.floor((diff / 1000) % 60),
          };
        }
    }
  const [timeLeft, setTimeLeft]  = useState(calculateTime());

  useEffect (() => {
    const interval = setInterval(() => setTimeLeft(calculateTime()), 1000);

    return () => clearInterval(interval);
  }, [])
  
  return (
    <div className="container">
      <div className="timer-container">
        <div className="title"> 
          <span className="its">It's</span>
          <div className="border">
            <div className ="time-numbers">
              <span>{timeLeft.days}</span>
              <span> : </span>
              <span>{timeLeft.hours}</span>
              <span> : </span>
              <span>{timeLeft.minutes}</span>
              <span> : </span>
              <span>{timeLeft.seconds}</span>
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

App.propTypes = {
  date: PropTypes.string.isRequired,
}
export default App;
