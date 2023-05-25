import React, { useEffect, useMemo, useState } from "react";
import { Colon, Container, TimeCard } from "./TimeComponent.styled";

const TimeComponent = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const formattedTime = `${Math.floor(hours / 10)}${hours % 10}${Math.floor(minutes / 10)}${
        minutes % 10
      }`;

      setTime(formattedTime);
    };

    const interval = setInterval(updateTime, 100);

    return () => clearInterval(interval);
  }, []);

  const memoizedTime = useMemo(() => time, [time]);

  return (
    <Container>
      <TimeCard>
        <p>{memoizedTime[0]}</p>
      </TimeCard>
      <TimeCard>
        <p>{memoizedTime[1]}</p>
      </TimeCard>
      <Colon>:</Colon>
      <TimeCard>
        <p>{memoizedTime[2]}</p>
      </TimeCard>
      <TimeCard>
        <p>{memoizedTime[3]}</p>
      </TimeCard>
    </Container>
  );
};

export default TimeComponent;
