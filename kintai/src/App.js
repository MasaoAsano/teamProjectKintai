import "./App.css";
import CalenderData from "./CalenderData";
import InputArea from "./Components/InputArea";
import React, { useEffect, useState } from "react";
import kintaiList from "./InitialData";

const templateList = [
  { id: "A", displayName: "在宅" ,timeList:[{startHour:8, startMinute:0, endHour:18, endMinute:0, style:"在宅"}]},
  { id: "B", displayName: "在社" ,timeList:[{startHour:8, startMinute:30, endHour:19, endMinute:30, style:"在社"}]},
  { id: "C", displayName: "在社→在宅" ,timeList:[{startHour:8, startMinute:30, endHour:14, endMinute:0, style:"在社"},{startHour:15, startMinute:0, endHour:19, endMinute:0, style:"在宅"}]},
  { id: "D", displayName: "在宅→在社" ,timeList:[{startHour:7, startMinute:30, endHour:10, endMinute:0, style:"在宅"},{startHour:11, startMinute:0, endHour:19, endMinute:0, style:"在社"}]},
];

function App() {
  const initialDate = new Date();
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [workResults, setWorkResults] = useState(convertToWorkResults(kintaiList));
  const [templateID, setTemplateID] = useState("A");
  const [dateList, setDateList] = useState(convertToDateList(templateList[0].timeList, initialDate));
  const [register, setRegister] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    const currentTemplate = templateList.find(template => template.id === templateID);
    setDateList(convertToDateList(currentTemplate.timeList, selectedDate));
  }, [templateID]);

  useEffect(() => {
    const kintai = kintaiList.find(kintai => kintai.date.getFullYear() === selectedDate.getFullYear() && kintai.date.getMonth() == selectedDate.getMonth() && kintai.date.getDate() === selectedDate.getDate());
    if (kintai) {
      setDateList(kintai.timeRecords);
      setNote(kintai.note);
    } else {
      const currentTemplate = templateList.find(template => template.id === templateID);
      setDateList(convertToDateList(currentTemplate.timeList, selectedDate));
      setNote("");
    }
  }, [selectedDate]);

  useEffect(() => {
    if (selectedDate.getHours() !== 0 || selectedDate.getMinutes() !== 0) {
      const newDate = new Date(selectedDate.getTime());
      newDate.setHours(0);
      newDate.setMinutes(0);
      newDate.setSeconds(0);
      newDate.setMilliseconds(0);
      setSelectedDate(newDate);
      return;
    }
    const target = kintaiList.findIndex(kintai => kintai.date.getFullYear() === selectedDate.getFullYear() && kintai.date.getMonth() == selectedDate.getMonth() && kintai.date.getDate() === selectedDate.getDate());
    const newKintai = {
      date: selectedDate,
      timeRecords: dateList,
      note: note,
      approved: false
    }
    if (target < 0) {
      kintaiList.push(newKintai);
    } else {
      kintaiList.splice(target, 1, newKintai);
    }
    setWorkResults(convertToWorkResults(kintaiList));
    setRegister(false);
  }, [register])
  
  return (
    <div className="App">
      <h1 className="head">シン・勤怠入力システム</h1>
      <CalenderData
        workResults={workResults}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <InputArea
        date={selectedDate}
        dateList={dateList}
        setDateList={setDateList}
        templateID={templateID}
        setTemplateID={setTemplateID}
        templateList={templateList}
        note={note}
        setNote={setNote}
        setRegister={setRegister}
      />
    </div>
  );
}

export default App;

function convertToWorkResults(kintaiList) {
  return kintaiList.map(kintai => {
    return {
      date: kintai.date,
      workingTime: calcWorkTime(kintai.timeRecords).work,
      overTime: calcWorkTime(kintai.timeRecords).over,
      approved:kintai.approved
    }
  })
}

function calcWorkTime(timeRecords) {
  let workTimeTotal = 0;
  for (const workTime of timeRecords) {
    const startTime = workTime.startDate;
    const endTime = workTime.endDate;
    workTimeTotal += (endTime.getTime() - startTime.getTime()) / 1000;
  }
  workTimeTotal = Math.max(0, workTimeTotal - 60 * 60);
  const workHour = Math.floor(workTimeTotal / (60 * 60));
  const workMinute = Math.floor((workTimeTotal - workHour * 60 * 60) / 60);
  const overTime = workTimeTotal - 8 * 60 * 60;
  const round = overTime > 0 ? Math.floor : Math.ceil;
  const overHour = round(overTime / (60 * 60));
  const overMinute = round((overTime - overHour * 60 * 60) / 60);
  const sign = overTime > 0 ? "" : "-";
  return {
    work: workHour + ":" + String(workMinute).padStart(2, "0"),
    over: sign + Math.abs(overHour) + ":" + String(Math.abs(overMinute)).padStart(2, "0")
  };
}

function convertToDateList(timeList, date) {
  return timeList.map(timeAndStyle => {
    const startDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      timeAndStyle.startHour,
      timeAndStyle.startMinute
    );
    const endDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      timeAndStyle.endHour,
      timeAndStyle.endMinute
    );
    return { startDate, endDate, style: timeAndStyle.style };
  })
}
