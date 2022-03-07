import React from "react";
import Timeline from "../components/Timeline";
import Inputs from "../components/Inputs";

class Feed extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Inputs {...this.props} />
        <Timeline {...this.props} />
      </React.Fragment>
    );
  }
}

export default Feed;
