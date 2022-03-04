import React from "react";

class Homepage extends React.Component {
  render() {
    return (
      <div className="card bg-light">
        <div className="card-body">
          <h5 className="card-title text-center">Please log in below</h5>
          <input type="text" className="card-text" />
          <button className="btn btn-primary my-2 ms-2" type="button">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Homepage;

{
  /* <div>
  <h5>Please log in below</h5>
  <input type="text" />
  <br />
  <button className="btn btn-primary" type="button">
    Login
  </button>
</div>; */
}
