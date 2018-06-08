import React, {Component} from "react";
import MySign from "./MySignComponent";

export default class Signin extends Component {
    state = {
        loggedUser: "Guest"
    }
    handleSignIn = (uname) => {
        this.setState({
            loggedUser: uname
        })
    }
  render() {
    return (
      <div>
        <h3>Welcome, {this.state.loggedUser}</h3>
        <MySign
            heading="Sign in"
            onSignIn={this.handleSignIn}
        />
      </div>
    )
  }
}
