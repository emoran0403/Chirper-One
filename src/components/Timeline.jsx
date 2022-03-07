import React from "react";

// given an array of objects, destructure them and create a card with each object's properties
// note the key takes the value of the uuid that was passed in on the object
class Timeline extends React.Component {
  render() {
    return (
      <div className="container d-flex flex-wrap justify-content-around">
        {this.props.chirps.map(({ ChirpTime, uuid, containsEH, quantityEH, message }) => (
          <div key="somekey" className="card" style={{ width: "25rem" }}>
            <div className="card-body">
              <h5 className="card-title">{this.props.username}</h5>
              {containsEH && <h6>There is {quantityEH} of Ervil Howell</h6>}
              <h6 className="card-subtitle mb-2 text-muted">{ChirpTime}</h6>
              <p className="card-text">{message}</p>
              <footer className="blockquote-footer">{uuid}</footer>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Timeline;

// props.messages.map(({ ChirpTime, uuid, message }) => (
//   <div key={uuid} className="card" style={{ width: "30rem", backgroundColor: "lightcoral" }}>
//     <div className="card-body">
//       <h5 className="card-title">{props.username}</h5>
//       {props.containsEH && <h6>{quantityEH} of Ervin Howell</h6>}
//       <h6 className="card-subtitle mb-2 text-muted">{ChirpTime}</h6>
//       <p className="card-text">{message}</p>
//       <footer className="blockquote-footer">{uuid}</footer>
//     </div>
//   </div>
// ))

{
  /* ; */
}
