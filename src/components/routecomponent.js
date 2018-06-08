import React, {Component} from "react";
import ProductsList from './shopping/ProductsList';
import CartItems from './shopping/CartItems';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="col-sm-6">
          <h3><ProductsList /></h3>
        </div>
        <div className="col-sm-6">
          <h3><CartItems /></h3>
        </div>
      </div>
    )
  }
}
  
export class NotFound extends Component {
  render() {
    return (
      <h1>
        404 Not Found
      </h1>
    )
  }
}
