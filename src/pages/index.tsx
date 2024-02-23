import { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { Inter } from "next/font/google";

dayjs.extend(duration);

const inter = Inter({ subsets: ["latin"] });

// crie uma função que retorna quanto tempo falta para o dia 15 de janeiro de 2026 no formato "X anos, Y meses, Z dias, A horas, B minutos e C segundos"
function timeLeft() {
  const futureDate = dayjs("2026-01-15");
  const now = dayjs();
  const diff = futureDate.diff(now, "second");
  const duration = dayjs.duration(diff, "second");
  return `${duration.years()} ano, ${duration.months()} meses, ${duration.days()} dias, ${duration.hours()} horas, ${duration.minutes()} minutos e ${duration.seconds()} segundos`;
}

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(timeLeft());
    }, 1000);
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>

      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold">Quanto tempo falta?</h1>
        {time}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
