import React, { useState } from "react";

const Inputs = (props) => {
  const [inputText, setInputText] = useState("");

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    if (!inputText) {
      return;
    }
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
