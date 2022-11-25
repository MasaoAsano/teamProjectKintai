import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarData = (props) => {
  const { workResults, setSelectedDate } = props;

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
      backgroundColor: "pink",
    };
  });

  const dayOffEvents = dayOff.map((x) => {
    return {
      title: "年休",
      start: x,
      backgroundColor: "gray",
    };
  });

  const workingResult = workResults.map((x) => {
    return {
      title: "残業" + x.workingTime + "時間",
      start: x.date,
      backgroundColor: "brue",
    };
  });

  const events = defaltEvents.concat(workingResult.concat(dayOffEvents));
//  console.log(events);

  // const unSelect = (info) => {
  //   if (selectedDayEL) {
  //   console.log(info.jsEvent.target.style.borderColor);
  //   info.jsEvent.target.style.borderColor = "yellow";
  //   selectedDayEL.style.borderWidth = "0px";
  //   selectedDayEL = undefined;
  //   }
  // };

  const selectDate = (info) => {
//    alert("Clicked on: " + info.date);
    setSelectedDate(info.date);
    // info.dayEl.style.borderColor = "red";
    // info.dayEl.style.borderWidth = "5px";
  };

  return (
    <div className="calenderData">
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      locale="ja"
      events={events}
      dateClick={selectDate}
      // unselect={unSelect}
      selectable={true}
    />
    </div>
  );
};
export default CalendarData;
