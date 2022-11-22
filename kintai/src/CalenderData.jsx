import React, { useCallback, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarData = (props) => {
  console.log(FullCalendar.apply);
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      locale="ja" // 日本語化
      events={[
        { title: "event 1", start: "2022-11-22" },
        // endに指定した日付は含まないので注意
        { title: "event 2", start: "2022-11-23", end: "2021-11-25" },
        {
          title: "event 3",
          start: "2022-11-25T10:00:00",
          end: "2021-11-25T12:00:00", // 時間を指定するときはISO 8601の形式で。
        },
      ]}
    />
  );
};
export default CalendarData;
