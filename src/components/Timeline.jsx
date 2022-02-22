import React, { useState, useEffect } from "react";

const Timeline = (props) => {
  const [startingArray, setArray] = useState(["message 1 is here as a test"]);

  useEffect(() => {
    setArray([...startingArray, props.message]);
  }, []);

  return (
    <>
      <div>Hello Timeline</div>
      <div>
        Here is some array:
        {startingArray.map((msg) => (
          <p>{msg}</p>
        ))}
      </div>
    </>
  );
};

export default Timeline;

// <p>Here is some array: {startingArray}</p>
// <div className="card" style="width: 18rem;">
//   <div className="card-body">
//     <h5 className="card-title">{props.username}</h5>
//     <h6 className="card-subtitle mb-2 text-muted">{props.chirpTime}</h6>
//     <p className="card-text">{props.message}</p>
//     <footer className="blockquote-footer">{props.uuid}</footer>
//   </div>
// </div>
//
//
//
//
//
//
//
//
//
