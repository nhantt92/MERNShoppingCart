import React, {Component} from "react";

export default class MySignComponent extends Component {
  constructor() {
    super()
    console.log('constructor')
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  sendData = () => {
      this.props.onSignIn(this.refs.user.value);
  }
  render() {
    console.log('render');
    return (
      <div>
          <h3>{this.props.heading}</h3>
          <form>
              <input
                type="text"
                className="form-control"
                ref="user"
                placeholder="Username" />
            <input
                type="password"
                className="form-control"
                ref="pwd"
                placeholder="Password" />
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.sendData}
            >
                {this.props.heading}
            </button>
          </form>
      </div>
    )
  }
}
