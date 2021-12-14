import { useState } from "react";
import { Markup } from "interweave";

function Schedule(props) {
  return (
    <div className="tour-detail__content" key={props.schedule.id}>
      <div className="tour-detail__content-title">
        <h4>{`${props.schedule.departure} - ${props.schedule.destination} || ${props.schedule.start_date} - ${props.schedule.end_date}`}</h4>
      </div>
      <div className="tour-detail__content-main schedules">
        <Markup content={props.schedule.travel_schedule} />
      </div>
    </div>
  );
}

export default Schedule;
