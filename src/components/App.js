import React, {Component} from "react";
import {Route, Link, Switch} from "react-router-dom"
import Signin from "./Signin";
import Signup from "./Signup";
import ManageProducts from "./shopping/ManageProducts";
import Home, {NotFound} from "./routecomponent";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
            <Link
              to="/"
              className="navbar-brand"
            >
              Shopping Cart
            </Link>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/manage">Manage Products</Link></li>
            </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/manage" component={ManageProducts} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;