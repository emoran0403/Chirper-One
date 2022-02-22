import React from "react";

const Inputs = (props) => {
  return (
    <>
      <p>Hello {props.username}, Chirp Away!</p>

      <form>
        <input id="chirpBox" type="text"></input>
        <br />
        <input className="btn btn-primary" type="button" value="Send Chirp" onClick={props.setChirp}></input>
      </form>
    </>
  );
};

export default Inputs;
