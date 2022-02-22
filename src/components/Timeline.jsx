import React, { useState, useEffect } from "react";

const Timeline = (props) => {
  return (
    <>
      <div>Hello Timeline</div>
      <div>
        {props.messages.map(({ ChirpTime, uuid, message }) => (
          <div key={uuid} className="card" style={{ width: "30rem", backgroundColor: "lightcoral" }}>
            <div className="card-body">
              <h5 className="card-title">{props.username}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{ChirpTime}</h6>
              <p className="card-text">{message}</p>
              <footer className="blockquote-footer">{uuid}</footer>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;

// <p>Here is some array: {startingArray}</p>
