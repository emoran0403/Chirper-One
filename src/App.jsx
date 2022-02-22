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
  const [chirps, setChirps] = useState([{ ChirpTime: moment().format("MMM Do YY"), uuid: uuidv4(), message: "starting message" }]);
  const [hasChirped, setHasChirped] = useState(false);

  //set the username whatever was entered in the login text box
  const handleUsername = (e) => {
    return setUsername(e.target.value);
  };

  //toggles the logged in status, thus rendering Timeline and Inputs
  const handleloggedIn = () => {
    return setloggedIn(!loggedIn);
  };

  //gets the text from the input box to be passed to Timeline
  //calls setTimestamp
  const handleSetChirp = (message) => {
    let chirpObject = {
      // creates a chirp with relevant info
      ChirpTime: moment().format("MMM Do YY"),
      uuid: uuidv4(),
      message,
    };

    if (hasChirped) {
      // on chirp 2+, keep the old chirps and add the new one
      setChirps([...chirps, chirpObject]);
    } else {
      // on first chirp, set the array to contain the first chirp
      setChirps([chirpObject]);
      setHasChirped(true);
    }
  };

  //this happens after a render, but this is what i need it to render = it seems like i need it to render once to trigger this, then this will update the pagee

  return (
    <div>
      <h1>Chirper One</h1> {/**this is always shown */}
      {loggedIn ? ( // this displays when loggedIn=true
        <>
          <Inputs username={username} setChirp={handleSetChirp} />
          <Timeline username={username} messages={chirps} />
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
