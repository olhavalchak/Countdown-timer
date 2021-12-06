import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import React, { useEffect,useState } from 'react';
// function App() {
//   const [days, setDays] = useState();
//   const [hours, setHours] = useState();
//   const [minutes, setMinutes] = useState();
//   const [seconds, setSeconds] = useState();

//   // const [date, setDate] = useState(new Date().getFullYear());
//   const birthday = new Date("Dec 03,2021 16:57:00").getTime();
//   const present = new Date().getTime();
//   const [difference,setDifference] = useState(birthday - present);

//   // const addYear = () => {
//   // setDifference(birthday - present);
//   //   if( difference >= 0)  {
//   //     setDays(Math.floor(difference / (24 * 60 * 60 * 1000)));
//   //     setHours(Math.floor(difference / (60 * 60 * 1000)));
//   //     setMinutes(Math.floor(difference / (60 * 1000)));
//   //     setSeconds(Math.floor(difference / (1000)));
//   //   }
//   // };
//   useEffect (() => {
//     const interval = setInterval(
//       () => {
//         setDifference(birthday - present);
//           if( difference >= 0)  {
//             console.log(difference);
//             setDays(Math.floor(difference / (24 * 60 * 60 * 1000)));
//             setHours(Math.floor(difference / (60 * 60 * 1000)));
//             setMinutes(Math.floor(difference / (60 * 1000)));
//             setSeconds(Math.floor(difference / (1000)));
//           }
//         }, 1000);
//     console.log(difference);
//     return clearInterval(interval);
//   }, [difference, birthday, present])

//   return (
//     <div className="container">
//       <div className="timer-container">
//         <div className="title">until your next birthday</div>
//         <span>{days}</span> <span>{hours}</span> <span>{minutes}</span> <span>{seconds}</span>
//       </div>
//     </div>
//   );
// }

// export default App;
