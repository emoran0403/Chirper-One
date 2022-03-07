import React from "react";
import Timeline from "../components/Timeline";
import Inputs from "../components/Inputs";

class Feed extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container d-flex justify-content-around">
          <Inputs {...this.props} />

          <Timeline {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}

export default Feed;
