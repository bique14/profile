import { useEffect, useState } from "react";

interface IMapping {
  day: (d: number) => string;
  month: (d: number) => string;
}
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const mapping: IMapping = {
  day: (d: number): string => days[d],
  month: (m: number): string => months[m],
};

const useDate = () => {
  const [dateFormat, setDateFormat] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateFormat(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, [dateFormat]);

  const format = (d: Date): string => {
    const formatDate: string = `${mapping.day(
      d.getDay()
    )} ${d.getDate()} ${mapping.month(d.getMonth())} ${d
      .getHours()
      .toString()
      .padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;

    return formatDate;
  };
  return { date: format(dateFormat) };
};

export default useDate;
