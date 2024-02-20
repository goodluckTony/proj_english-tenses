import React, { useState, useEffect } from "react";
import "./index.scss";

const Timer = ({ startTime }) => {
  // const classNames = `${customClassName ? customClassName : ''}`;
  // const className = `${bannerTimerStyles}`;

  const calculateTimeLeft = () => {
    const difference = startTime - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  // const countdownFinished = days === 0 && hours === 0 && minutes === 0 && seconds === 0;
  const countdownFinished = Object.keys(timeLeft).length === 0;

  return (
    <div className="banner-timer" >
      {countdownFinished ? "00 : 00 : 00 : 00"
        : `${formatTime(days)} : ${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)}`}
    </div>
  );
};

export default Timer;