"use client";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";

dayjs.extend(duration);

function timeLeft() {
  const futureDate = dayjs("2026-01-15");
  const now = dayjs();
  const diff = futureDate.diff(now, "second");
  const duration = dayjs.duration(diff, "second");
  return `${duration.years()} ano, ${duration.months()} meses, ${duration.days()} dias, ${duration.hours()} horas, ${duration.minutes()} minutos e ${duration.seconds()} segundos`;
}

export default function Timer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(timeLeft());
    }, 1000);
  }, []);

  return (
    <>
      <h1 className="text-4xl font-semibold">Quanto tempo falta?</h1>
      <span>{time}</span>
    </>
  );
}
