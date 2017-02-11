import React, { Component } from 'react';
import LaddaButton, { EXPAND_LEFT,
  EXPAND_RIGHT,
  EXPAND_UP,
  EXPAND_DOWN,
  CONTRACT,
  CONTRACT_OVERLAY,
  SLIDE_LEFT,
  SLIDE_RIGHT,
  SLIDE_UP,
  SLIDE_DOWN,
  ZOOM_IN,
  ZOOM_OUT } from 'react-ladda';

class LoadingButtons extends Component {

  state = {
    expLeft: false,
    expRight: false,
    expUp: false,
    expDown: false,
    expContract: false,
    expOverlay: false,
    expSlideLeft: false,
    expSlideRight: false,
    expSlideUp: false,
    expSlideDown: false,
    expZoomIn: false,
    expZoomOut: false,
  }

  toggle(name) {
    this.setState({
      [name]: !this.state[name],
      progress: 0.5,
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="card">
            <div className="card-header">
              <i className="icon-cursor"></i> Loading buttons - React Ladda
            </div>
            <div className="card-block">
              <p>
                A UI concept which merges loading indicators into the action that invoked them.
                Primarily intended for use with forms where
                it gives users immediate feedback upon submit rather than leaving them wondering
                while the browser does its thing. For a
                real-world example, check out any of the forms on <a href="http://slides.com">slides.com</a>.
              </p>
              <div className="row text-center">
                <div className="col-md-3 py-2">
                  <h6>expand-left</h6>
                  <LaddaButton
                    className="btn btn-success btn-ladda"
                    loading={this.state.expLeft}
                    onClick={() => this.toggle('expLeft')}
                    data-color="green"
                    data-style={EXPAND_LEFT}
                  >
                    Submit!
                  </LaddaButton>
                </div>
                <div className="col-md-3 py-2">
                  <h6>expand-right</h6>
                  <LaddaButton
                    className="btn btn-success btn-ladda"
                    loading={this.state.expRight}
                    onClick={() => this.toggle('expRight')}
                    data-color="green"
                    data-style={EXPAND_RIGHT}
                  >
                    Submit!
                  </LaddaButton>
                </div>

                <div className="col-md-3 py-2">
                  <h6>expand-up</h6>
                  <LaddaButton
                    className="btn btn-success btn-ladda"
                    loading={this.state.expUp}
                    onClick={() => this.toggle('expUp')}
                    data-color="green"
                    data-style={EXPAND_UP}
                  >
                    Submit!
                  </LaddaButton>
                </div>

                <div className="col-md-3 py-2">
                  <h6>expand-down</h6>
                  <LaddaButton
                    className="btn btn-success btn-ladda"
                    loading={this.state.expDown}
                    onClick={() => this.toggle('expDown')}
                    data-color="green"
                    data-style={EXPAND_DOWN}
                  >
                    Submit!
                  </LaddaButton>
                </div>

                {/* Set 2 */}
                <div className="col-md-3 py-2">
                  <h6>contract</h6>
                  <LaddaButton
                    className="btn btn-danger btn-ladda"
                    loading={this.state.expContract}
                    onClick={() => this.toggle('expContract')}
                    data-color="red"
                    data-style={CONTRACT}
                  >
                  Submit!
                  </LaddaButton>
                </div>

                <div className="col-md-3 py-2">
                  <h6>contract-overlay</h6>
                  <LaddaButton
                    className="btn btn-danger btn-ladda"
                    loading={this.state.expOverlay}
                    onClick={() => this.toggle('expOverlay')}
                    data-color="red"
                    data-style={CONTRACT_OVERLAY}
                  >
                  Submit!
                  </LaddaButton>
                </div>

                <div className="col-md-3 py-2">
                  <h6>zoom-in</h6>
                  <LaddaButton
                    className="btn btn-danger btn-ladda"
                    loading={this.state.expZoomIn}
                    onClick={() => this.toggle('expZoomIn')}
                    data-color="red"
                    data-style={ZOOM_IN}
                  >
                  Submit!
                  </LaddaButton>
                </div>

                <div className="col-md-3 py-2">
                  <h6>zoom-out</h6>
                  <LaddaButton
                    className="btn btn-danger btn-ladda"
                    loading={this.state.expZoomOut}
                    onClick={() => this.toggle('expZoomOut')}
                    data-color="red"
                    data-style={ZOOM_OUT}
                  >
                  Submit!
                  </LaddaButton>
                </div>

                {/* Set 3 */}

                <div className="col-md-3 py-2">
                  <h6>slide-left</h6>
                  <LaddaButton
                    className="btn btn-info btn-ladda"
                    loading={this.state.expSlideLeft}
                    onClick={() => this.toggle('expSlideLeft')}
                    data-color="blue"
                    data-style={SLIDE_LEFT}
                  >
                  Submit!
                  </LaddaButton>
                </div>

                <div className="col-md-3 py-2">
                  <h6>slide-right</h6>
                  <LaddaButton
                    className="btn btn-info btn-ladda"
                    loading={this.state.expSlideRight}
                    onClick={() => this.toggle('expSlideRight')}
                    data-color="blue"
                    data-style={SLIDE_RIGHT}
                  >
                  Submit!
                  </LaddaButton>
                </div>

                <div className="col-md-3 py-2">
                  <h6>slide-up</h6>
                  <LaddaButton
                    className="btn btn-info btn-ladda"
                    loading={this.state.expSlideUp}
                    onClick={() => this.toggle('expSlideUp')}
                    data-color="blue"
                    data-style={SLIDE_UP}
                  >
                  Submit!
                  </LaddaButton>
                </div>

                <div className="col-md-3 py-2">
                  <h6>slide-down</h6>
                  <LaddaButton
                    className="btn btn-info btn-ladda"
                    loading={this.state.expSlideDown}
                    onClick={() => this.toggle('expSlideDown')}
                    data-color="blue"
                    data-style={SLIDE_DOWN}
                  >
                  Submit!
                  </LaddaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoadingButtons;
