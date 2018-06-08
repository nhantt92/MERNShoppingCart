import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {removeFromCart} from "../../actions/CartActions";

class CartItems extends Component {
  totalAmount = () => {
    let amount =0;
    for (let e of this.props.cartItems) {
      amount += (e.price * e.qty);
    }
    return amount;
  }
  render() {
    let output;
    if(this.props.cartItems.length) {
      output = this.props.cartItems.map((item) => {
        return <tr key={item._id}>
          <td>
            <button
              className="btn btn-danger btn-xs"
              onClick={()=>this.props.removeFromCart(item)}
            >
              X
            </button>
            {item.name}
          </td>
          <td>{item.price}</td>
          <td>{item.qty}</td>
          <td>{item.qty * item.price}</td>
        </tr>
      })
    } else {
      output = <tr><td colSpan="4">No Items found..</td></tr>
    }
    return (
      <div>
        <p>
          Cart Items are
          <span className="label label-primary">
            {this.props.cartItems.length}
          </span>
        </p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
              {output}
          <tr> 
              <th colSpan="3" align="right">Total Amount</th>
              <th>{this.totalAmount()}</th>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    cartItems : state.cartReducer
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({removeFromCart}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
