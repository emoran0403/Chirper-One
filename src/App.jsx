//* Imports
import React, { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

//* Component Imports
import Inputs from "./components/Inputs";
import Timeline from "./components/Timeline";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      loggedIn: false,
      hasChirped: false,
      chirps: [
        { ChirpTime: moment().format("MMM Do YY"), uuid: uuidv4(), containsEH: false, quantityEH: "", message: `First, type in the Chirp box to send your first Chirp.` },
        { ChirpTime: moment().format("MMM Do YY"), uuid: uuidv4(), containsEH: true, quantityEH: "A fair amount", message: `Then, check if your Chirp contains any Ervin Howell.` },
        {
          ChirpTime: moment().format("MMM Do YY"),
          uuid: uuidv4(),
          containsEH: true,
          quantityEH: "Just a little bit",
          message: `Lastly, if our Chirp contains any Ervin Howell, specify the amount as best you can.`,
        },
        { ChirpTime: moment().format("MMM Do YY"), uuid: uuidv4(), containsEH: false, quantityEH: "", message: `Happy Chirping!` },
      ],
    };

    const handleChirp = (e) => {
      e.preventDefault();
      // this.setState({ chirps: [...this.state.chirps, newChirpObject] });
    };
  }

  // const [username, setUsername] = useState(""); // used to display the username
  // const [loggedIn, setloggedIn] = useState(false); // used to conditionally display components
  // const [hasChirped, setHasChirped] = useState(false); // used to hide the initial Chirp

  // intitializes an array of objects within which to store user Chirps.
  // const [chirps, setChirps] = useState([{ ChirpTime: moment().format("MMM Do YY"), uuid: uuidv4(), message: `Type in the box above to send your first Chirp!` }]);

  // set the username to the value of the login text box
  // const handleUsername = (e) => {
  //   return setUsername(e.target.value);
  // };

  // toggles the logged in status, thus rendering Timeline and Inputs
  // const handleloggedIn = () => {
  //   return setloggedIn(!loggedIn);
  // };

  // creates the chirpObject, which contains the message passed from the Input component,
  // sets the time and uuid on the chirpObject

  // const handleSetChirp = (message) => {
  //   let chirpObject = {
  //     // creates a chirp with relevant info
  //     ChirpTime: moment().format("MMM Do YY"),
  //     uuid: uuidv4(),
  //     message,
  //   };

  //   if (hasChirped) {
  //     // on chirp 2+, keeps the old chirps and add the new one
  //     setChirps([...chirps, chirpObject]);
  //   } else {
  //     // on first chirp, set the array to override the initial Chirp, and set hasChirped to True
  //     setChirps([chirpObject]);
  //     setHasChirped(true);
  //   }
  // };

  render() {
    return (
      <div>
        <h1>Chirper One</h1>
        {/* <Timeline /> */}
        <Inputs />
        {/* <h5>Please log in below</h5>
        <input type="text" />
        <br />
        <button className="btn btn-primary" type="button">
          Login
        </button> */}
      </div>
    );
  }
}

export default App;

// { condition && (dothiswhentrue)} //shows jsx when condition is true.  if false, returns nothing
// {!condition && (dothiswhenfalse)} // when condition is false, returns jsx, when true, returns nothing
//   {condition || (dothiswhenfalse)} // returns when condition false.  if condition is true, returns true, but doenst do anything
//   {conditon && today === 'tuesday' && true && <p>lol</p>}

//*  how to get bootstrap imported for styling - import "bootstrap/dist/css/bootstrap.min.css";
//* why is it not liking 'setChirpTime' - it was defined in the useState declaration, i needed to reference it with the handleChirpTime convention
//* do i use .push or .map in my array of chirps - use spread <...> to keep the old elements and add new ones
//* need to find a way to call chirpTime, Uuid, and setChirp all at once when the chirp button is pressed - we switched these to just function calls and added that roperty to the chirp object

/**
 * todo - default to the no radio button
 * todo - render radio button checks reactfully
 * todo - conditionally render the
 *
 *
 *
 *
 *
 */
