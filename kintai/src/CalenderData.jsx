import React, { useCallback, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Calendar } from "@fullcalendar/core";

const CalendarData = (props) => {
  const { workResults, selectedDate, setSelectedDate } = props;

  const noWorkingDay = [
    "20221103",
    "20221105",
    "2022-11-06",
    "2022-11-12",
    "2022-11-13",
    "2022-11-19",
    "2022-11-20",
    "2022-11-23",
    "2022-11-26",
    "2022-11-27",
  ];

  const dayOff = ["20221124"];

  const defaltEvents = noWorkingDay.map((x) => {
    return {
      start: x,
      display: "background",
    };
  });

  const dayOffEvents = dayOff.map((x) => {
    return {
      title: "年休",
      start: x,
      backgroundColor: "gray",
    };
  });

  const date = new Date();

  const workingResult = workResults.map((x) => {
    return {
      title: x.workingTime + "時間",
      start: x.date,
      backgroundColor: "brue",
    };
  });

  const events = defaltEvents.concat(workingResult.concat(dayOffEvents));
  console.log(events);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      locale="ja" // 日本語化
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
      dateClick={(info) => {
        alert("Clicked on: " + info.dateStr);
        alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
        alert("Current view: " + info.view.type);
        // change the day's background color just for fun
        info.dayEl.style.backgroundColor = "red";
      }}
    />
  );
};
export default CalendarData;
