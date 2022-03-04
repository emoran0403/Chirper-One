import React from "react";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h5>Please log in below</h5>
        <input type="text" />
        <br />
        <button className="btn btn-primary" type="button">
          Login
        </button>
      </div>
    );
  }
}

export default Homepage;
