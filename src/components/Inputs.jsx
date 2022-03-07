import React, { useState } from "react";

class Inputs extends React.Component {
  /**
   * this.props.setChirpBox={this.handleChirpBoxChange}
   * this.props.setContainsEh={this.handleContainsEH}
   * this.props.setQuantityEH={this.handleQuantityEH}
   * this.props.setChirp={this.handleChirp}
   */

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="container ">
        <section className="row">
          <div className="col-md-10 card shadow bg-light">
            <form className="form-group">
              <input className="form-control mt-3" value={this.props.tempMessage} onChange={this.props.setChirpBox} placeholder="Chirp box!" type="text" />

              <div className="mb-3 d-flex justify-content-between align-items-center">
                <div>
                  <p className="mt-3">Does your Chirp contain any Ervin Howell?</p>

                  <div className="form-check form-check-inline">
                    <input
                      className="mx-2 form-check-input"
                      type="radio"
                      id="ehyes"
                      name="eh"
                      value={this.props.tempContainsEH}
                      checked={this.props.tempContainsEH === true}
                      onChange={() => this.props.setContainsEH(true)}
                    />
                    <label className="form-check-label" htmlFor="true">
                      Yes
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="mx-2 form-check-input"
                      type="radio"
                      id="ehno"
                      name="eh"
                      value={this.props.tempContainsEH}
                      checked={this.props.tempContainsEH === false}
                      onChange={() => this.props.setContainsEH(false)}
                    />
                    <label className="form-check-label" htmlFor="false">
                      No
                    </label>
                  </div>
                </div>
                <div>
                  {!this.props.tempContainsEH && (
                    <>
                      <button type="button" onClick={(e) => this.props.setChirp(e)} className="btn btn-primary">
                        Chirp
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* **************Conditionally render this based on whether chrip contains ervin howell************ */}
              {this.props.tempContainsEH && (
                <>
                  <hr></hr>
                  <div className="mb-3 d-flex justify-content-between align-items-center">
                    <div>
                      <label htmlFor="ehAmount">How much Ervin Howell is contained in your Chirp?</label>
                      <select value={this.props.tempQuantityEH} onChange={(e) => this.props.setQuantityEH(e)} className="my-2 form-select" id="ehAmount" name="ehAmount">
                        <option value="">--Please choose an option--</option>
                        <option value="Not enough">Not enough</option>
                        <option value="Just a little bit">Just a little bit</option>
                        <option value="A fair amount">A fair amount</option>
                        <option value="A little more than necessary">A little more than necessary,</option>
                        <option value="Over 9000">Over 9000!</option>
                        <option value="10.25 Howells worth">10.25 Howells worth</option>
                        <option value="Too much!">Too much!</option>
                        <option value="Enough to make Andrew cry">Enough to make Andrew cry</option>
                        <option value="More Ervin Howell than a single Chirp can contain!">More Ervin Howell than a single Chirp can contain!</option>
                      </select>
                    </div>
                    <div>
                      <button type="button" onClick={(e) => this.props.setChirp(e)} className="btn btn-primary">
                        Chirp
                      </button>
                    </div>
                  </div>
                </>
              )}
            </form>
          </div>
        </section>
        <section></section>
      </main>
    );
  }
}

export default Inputs;

// <p>Hello someUsernameHere, Chirp Away!</p>

// <form>
//   <input type="text"></input>
//   <br />
//   <input className="btn btn-primary" type="button" value="Send Chirp"></input>
// </form>
