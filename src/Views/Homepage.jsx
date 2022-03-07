import React from "react";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card bg-light">
        <div className="card-body">
          <h5 className="card-title text-center">Please log in</h5>
          <input type="text" value={this.props.username} className="card-text" onChange={(e) => this.props.setUsernameChange(e)} />
          <button className="btn btn-primary my-2 ms-2" type="button" onClick={this.props.setLogin}>
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
