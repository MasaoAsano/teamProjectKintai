import React, { useCallback, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarData = (props) => {
  const noWorkingDay = [
    "2022-11-03",
    "2022-11-05",
    "2022-11-06",
    "2022-11-12",
    "2022-11-13",
    "2022-11-19",
    "2022-11-20",
    "2022-11-23",
    "2022-11-26",
    "2022-11-27",
  ];
  const defaltEvents = noWorkingDay.map((x) => {
    return {
      start: x,
      display: "background",
    };
  });

  const workingDay = [
    ["2022-11-01", 9],
    ["2022-11-02", 8],
    ["2022-11-04", 10],
  ];

  const workingResult = workingDay.map((x) => {
    return {
      title: x[1] + "時間",
      start: x[0],
      backgroundColor: "red",
    };
  });

  console.log(workingResult);
  const events = defaltEvents.concat(workingResult);
  console.log(events);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      locale="ja" // 日本語化
      // calender={{event:events1,eventcolor:blue},{event:events2, eventColor:red}}
      events={
        events
        // {
        //   start: "2022-11-05",
        //   end: "2022-11-05",
        //   display: "background",
        // },
        // {
        //   start: "2022-11-06",
        //   end: "2014-11-06",
        //   display: "background",
        // },
        // { title: "休日", start: "2022-11-22" },
        // // endに指定した日付は含まないので注意
        // { title: "event 2", start: "2022-11-23", end: "2021-11-25" },
        // {
        //   title: "event 3",
        //   start: "2022-11-25T10:00:00",
        //   end: "2021-11-25T12:00:00", // 時間を指定するときはISO 8601の形式で。
        // },
        // eventColor:
      }
    />
  );
};
export default CalendarData;
