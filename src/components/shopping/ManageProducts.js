import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import axios from "axios";
import {addProduct, deleteProduct, updateProduct, getProducts} from "../../actions/ProductActions";

class ManageProducts extends Component {
  constructor() {
    super();
    this.apiUrl = "http://localhost:4000/wsproducts";
  }
  componentDidMount() {
    axios.get(this.apiUrl).then((resp) => {
      this.props.getProducts(resp.data);
      console.log("GET Success", resp);
    }, (err) => {
      console.log("GET Error", err);
    })
  }
  handleAdd = () => {
    let newProduct = {
      name: this.refs.pname.value,
      price: this.refs.pprice.value
    }
    axios.post(this.apiUrl, newProduct).then((resp) => {
      this.props.addProduct(resp.data);
    }, (err) => {
      console.log("Add  Error", err);
    })
  }
  handleDelete = (pid) => {
    axios.delete(this.apiUrl+"/"+pid).then((resp) => {
      this.props.deleteProduct(pid);
    }, (err) => {
      console.log("Delete  Error", err);
    })
  }
  handleEdit = (product) => {
    this.refs.pid.value = product._id,
    this.refs.pname.value = product.name,
    this.refs.pprice.value = product.price
  }
  handleUpdate = () => {
    let modifiedProduct = {
      _id: this.refs.pid.value,
      name: this.refs.pname.value,
      price: this.refs.pprice.value
    }
    axios.put(this.apiUrl+"/"+modifiedProduct._id, modifiedProduct).then((resp) => {
      this.props.updateProduct(modifiedProduct);
    }, (err) => {
      console.log("Update  Error", err);
    })
  }
  render() {
    let output;
    if (this.props.mgProducts) {
      output = this.props.mgProducts.map((product) => {
        return <tr key={product._id}>
          <td>{product._id}</td>        
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.handleDelete(product._id)}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.handleEdit(product)}
            >
              Edit
            </button>
          </td>
        </tr>
      })
    } else {
      output = <tr><td colSpan="3">No products found</td></tr>
    }
    return (
      <div>
        <p>Manage Products</p>
        <form className="well">
          <input type="text" ref="pid" placeholder="ID" readOnly/>
          <input type="text" ref="pname" placeholder="name" />
          <input type="text" ref="pprice" placeholder="price" />
          <button 
            type="button"
            className="btn btn-primary"
            onClick={this.handleAdd}>
            Add product
          </button>
          <button 
            type="button"
            className="btn btn-primary"
            onClick={this.handleUpdate}>
            Update product
          </button>
        </form>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>id</th>              
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
    mgProducts: state.productReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addProduct, deleteProduct, updateProduct, getProducts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProducts);
