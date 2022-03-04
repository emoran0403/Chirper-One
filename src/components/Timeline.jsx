import React from "react";

// given an array of objects, destructure them and create a card with each object's properties
// note the key takes the value of the uuid that was passed in on the object
class Timeline extends React.Component {
  render() {
    return (
      <div className="container d-flex flex-wrap justify-content-around">
        <div key="111111" className="card my-1 bg-light" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">UserNameHere</h5>
            <h6>quantityEH of Ervin Howell</h6>
            <h6 className="card-subtitle mb-2 text-muted">Chirp Time Here</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla aliquet
              porttitor.
            </p>
            <footer className="blockquote-footer">UUID HERE</footer>
          </div>
        </div>
        <div key="22222222222" className="card my-1 bg-light" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">UserNameHere</h5>
            <h6>quantityEH of Ervin Howell</h6>
            <h6 className="card-subtitle mb-2 text-muted">Chirp Time Here</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla aliquet
              porttitor.
            </p>
            <footer className="blockquote-footer">UUID HERE</footer>
          </div>
        </div>
        <div key="333333333333" className="card my-1 bg-light" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">UserNameHere</h5>
            <h6>quantityEH of Ervin Howell</h6>
            <h6 className="card-subtitle mb-2 text-muted">Chirp Time Here</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla aliquet
              porttitor.
            </p>
            <footer className="blockquote-footer">UUID HERE</footer>
          </div>
        </div>
        <div key="44444444444444" className="card my-1 bg-light" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">UserNameHere</h5>
            <h6>quantityEH of Ervin Howell</h6>
            <h6 className="card-subtitle mb-2 text-muted">Chirp Time Here</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla aliquet
              porttitor.
            </p>
            <footer className="blockquote-footer">UUID HERE</footer>
          </div>
        </div>
        <div key="55555555555555" className="card my-1 bg-light" style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">UserNameHere</h5>
            <h6>quantityEH of Ervin Howell</h6>
            <h6 className="card-subtitle mb-2 text-muted">Chirp Time Here</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla aliquet
              porttitor.
            </p>
            <footer className="blockquote-footer">UUID HERE</footer>
          </div>
        </div>
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
  /* <div key="somekey" className="card" style={{ width: "30rem", backgroundColor: "lightcoral" }}>
  <div className="card-body">
    <h5 className="card-title">UserNameHere</h5>
    <h6>quantityEH of Ervin Howell</h6>
    <h6 className="card-subtitle mb-2 text-muted">Chirp Time Here</h6>
    <p className="card-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla aliquet
      porttitor.
    </p>
    <footer className="blockquote-footer">UUID HERE</footer>
  </div>
</div>; */
}
