import React from "react";
import { useEffect } from "react";
import bootstrap from "bootstrap";

const Timeline = (props) => {
  const startingArray = ["message 1 is here as a test"];

  startingArray.push(props.message); // this adds only the last message onto the array, it does not chain them as i thought it would
  const chirpTime = props.timestamp; //used to display the time the chrp was sent

  useEffect(() => {
    //   does my array get updated inside this use effect?
  });

  return (
    <>
      {/* <div>Hello Timeline</div>
      <p>Here is some array: {startingArray}</p> */}
      <div className="card" style="width: 18rem;">
        <div className="card-body">
          <h5 className="card-title">{props.username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.chirpTime}</h6>
          <p className="card-text">{props.message}</p>
          <footer className="blockquote-footer">{props.uuid}</footer>
        </div>
      </div>
      ;
    </>
  );
};

export default Timeline;
