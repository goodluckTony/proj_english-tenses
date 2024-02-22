import React, { useState, useEffect } from "react";
import "./index.scss";

const Timer = () => {
  const calculateTimeLeft = () => {
    const currentTime = new Date().getTime();
    const endOfTheDay = new Date().setHours(23,59,59,999);
    const difference = endOfTheDay - currentTime;
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

  const remainingTime = `${formatTime(days)} : ${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)}`;

  return (
    <div className="banner-timer" >

      {remainingTime}
    </div>
  );
};

export default Timer;