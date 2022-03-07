//* Imports
import React, { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

//* Component Imports
import Inputs from "./components/Inputs";
import Timeline from "./components/Timeline";
import Homepage from "./Views/Homepage";
import Feed from "./Views/Feed";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tempContainsEH: false,
      tempQuantityEH: "",
      tempMessage: "",
      username: "",
      loggedIn: false,
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
  }
  //********************************************************************  Homepage State ***********************************************************************/
  handleUsernameChange = (e) => {
    // controls the username inputbox to update the username state when a key is pressed
    this.setState({ username: e.target.value });
  };

  handleLogin = () => {
    // log in state setter function tp update the loggedIn state when the login button is clicked
    this.setState({ loggedIn: true });
    this.props.history.push("/ChirpFeed");
  };

  //********************************************************************  Inputs State ***********************************************************************/

  handleChirpBoxChange = (e) => {
    // controls the username inputbox to update the username state when a key is pressed
    this.setState({ tempMessage: e.target.value });
  };

  handleContainsEH = (boole) => {
    // controls the radio buttons to update state to reflect if chirp contains EH
    console.log(boole);
    this.setState({ tempContainsEH: boole }); //! do i need containsEH as a piece of state, then use it in a chirp and set back to false?
  };

  handleQuantityEH = (e) => {
    // controls the selector to update state to reflect the quantity of EH
    this.setState({ tempQuantityEH: e.target.value }); //! do i need quantityEH as a piece of state, then use it in a chirp and set back to false?
  };

  handleChirp = (e) => {
    // chirp state setter function to update state to contain a new chirp
    if (!this.state.tempMessage) {
      return; // prevents empty chirps
    }

    e.preventDefault();
    // creates a chirp with relevant info
    let chirpObject = {
      ChirpTime: moment().format("MMM Do YY"),
      uuid: uuidv4(),
      containsEH: this.state.tempContainsEH,
      quantityEH: this.state.tempQuantityEH,
      message: this.state.tempMessage,
    };

    // sets the state to keep the old chirps, and add the new one
    this.setState({ chirps: [...this.state.chirps, chirpObject] });
    // sets the values of tempContainsEH and tempQuantityEH back to their defaults
    this.setState({ tempContainsEH: false, tempQuantityEH: "", tempMessage: "" });
  };

  render() {
    return (
      <>
        <div className="mt-3 mb-5">
          <h1 className="text-center">Chirper One</h1>
        </div>

        <Switch>
          <Route exact path="/">
            <div className="d-flex justify-content-around">
              <Homepage {...this.state} setLogin={this.handleLogin} setUsernameChange={this.handleUsernameChange} />
            </div>
          </Route>
          <Route exact path="/ChirpFeed">
            <Feed {...this.state} setChirpBox={this.handleChirpBoxChange} setContainsEH={this.handleContainsEH} setQuantityEH={this.handleQuantityEH} setChirp={this.handleChirp} />
          </Route>
        </Switch>
      </>
    );
  }
}

export default withRouter(App);

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
 * todo - conditionally render the bottom half of the chirp input box based on the radio buttons
 * todo - pass a state setter down to the inputs component
 * todo - get the input from the chirpbox, radio buttons, and selector all into an object
 * todo - pass that object into state and send it to App
 * todo - have homepage component update the username and logged in pieces of state
 * ?done - make a home page component where the user will log in
 * ?done - refactor Timeline to display the chirps with the new data
 *
 *
 *
 *
 *
 *
 */
