//* Imports
import React, { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

//* Component Imports
import Inputs from "./components/Inputs";
import Timeline from "./components/Timeline";

const App = () => {
  const [username, setUsername] = useState("");
  const [loggedIn, setloggedIn] = useState(false);
  const [chirp, setChirp] = useState("");
  const [chirpTime, setChirpTime] = useState("");
  const [uuid, setUuid] = useState("");

  //set the username whatever was entered in the login text box
  const handleUsername = (e) => {
    return setUsername(e.target.value);
  };

  //toggles the logged in status, thus rendering Timeline and Inputs
  const handleloggedIn = () => {
    return setloggedIn(!loggedIn);
  };

  //sets the timestamp to be passed to Timeline
  const handleChirpTime = () => {
    return setChirpTime(moment().format("MMM Do YY"));
  };

  //sets a universally unique identifier to be passed to Timeline
  const handleSetUuid = () => {
    return setUuid(uuidv4());
  };

  //gets the text from the input box to be passed to Timeline
  //calls setTimestamp
  const handleSetChirp = () => {
    let target = document.getElementById("chirpBox"); // targets the text box in Inputs component
    let message = target.value; // assigns the value of the text box to message
    // setChirpTime();
    // setUuid();
    return setChirp(message); // passes message to setChirp
  };

  return (
    <div>
      <h1>Chirper One</h1> {/**this is always shown */}
      {loggedIn ? ( // this displays when loggedIn=true
        <>
          <Inputs username={username} setChirp={handleSetChirp} />
          <Timeline username={username} message={chirp} chirpTime={chirpTime} uuid={uuid} />
        </>
      ) : (
        // this displays when loggedIn=false
        <>
          <h5>Please log in below</h5>
          <input type="text" onChange={handleUsername} value={username} />
          <br />
          <button className="btn btn-primary" type="button" onClick={handleloggedIn}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default App;

//*  how to get bootstrap imported for styling - import "bootstrap/dist/css/bootstrap.min.css";

//* why is it not liking 'setChirpTime' - it was defined in the useState declaration, i needed to reference it with the handleChirpTime convention

//! do i use .push or .map in my array of chirps

//! need to find a way to call chirpTime, Uuid, and setChirp all at once when the chirp button is pressed
//!how do i use
