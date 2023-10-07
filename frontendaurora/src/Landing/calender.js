//Yasmine's code
//Worked with Meghana to integrate with Admin
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Admin from "../Admin.js";
function CalendarComponent() {
  const [date, setDate] = useState(new Date());
  const [adminData, setAdminData] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const callBackAdminData = (eventsList) => {
    setAdminData(eventsList);
    console.log(eventsList.length);
    setCount(count+1);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(null);
  };

  const renderEventsForDate = (dateToRender) => {
    const applicableEvents = [];
    const eventsForDate = adminData.map((event) => {
        const eventDate = new Date(event.date);
        if (eventDate.getDate() == dateToRender.getDate()) {
            applicableEvents.push(event);
        }

    });

    return (
        <>
        {applicableEvents.map((m,index) => (
            <li key={index}>{m.name+" "+m.date}</li>
        ))}
        </>
    );
  };

  const customTileContent = ({date, view}) => {
    if(view==='month') {
        const eventContent = renderEventsForDate(date);
        return eventContent;
    }
    return null;
  };



  return (
    <div className="app">
      <h1 className="header">Upcoming Volunteer Opportunities</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} tileContent={customTileContent}/>
      </div>
      <div>
        <Admin eventDate={date} parentCallback={callBackAdminData}/>
      </div>
      <div className="text-center">
        <h2>Selected date: {date.toDateString()}</h2>
        <h3>Would call the function that has the events that meg is making{" "+count}</h3>
      </div>
      
    </div>
  );
}

export default CalendarComponent;