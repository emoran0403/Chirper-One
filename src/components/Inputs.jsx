import React, { useState } from "react";

const Inputs = (props) => {
  const [inputText, setInputText] = useState("");

  const handleInputText = (e) => {
    // sets the input text to the value of the input box - allows us to statefully update the contents of the text box
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    // if there is no input text, return - this prevents spam clicking the button
    if (!inputText) {
      return;
    }
    // if there is text, pass it to App, then set the input text to an empty string
    props.setChirp(inputText);
    setInputText("");
  };

  return (
    <>
      <p>Hello {props.username}, Chirp Away!</p>

      <form>
        <input type="text" onChange={handleInputText} value={inputText}></input>
        <br />
        <input className="btn btn-primary" type="button" value="Send Chirp" onClick={handleButtonClick}></input>
      </form>
    </>
  );
};

export default Inputs;
