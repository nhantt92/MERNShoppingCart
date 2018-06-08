import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import axios from "axios";
import {addToCart, getProducts} from "../../actions/ProductActions";

class ProductsList extends Component {
  constructor() {
    super()
  this.state = {}
  this.apiUrl = "http://localhost:4000/wsproducts"
  }

  componentDidMount() {
    axios.get(this.apiUrl).then((resp) => {
      this.props.getProducts(resp.data);
    }, (err) => {
      console.log("GET Error", err);
    })
  }
  render() {    
    let output;
    if(this.props.products.length) {
      output = this.props.products.map((product) => {
        return <tr key={product._id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <button
                className="btn btn-primary" 
                onClick={()=>this.props.addToCart(product)}
              >
                Add to cart
              </button>
            </td>
          </tr>
      })
    } else {
      output = <tr><td colSpan="3">No products found</td></tr>
    }
    return (
      <div>
        <p>Products List</p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
           {output}
          </tbody>
          
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products : state.productReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addToCart, getProducts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
