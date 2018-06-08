// Action Creators
export function getProducts(data) {
  return {
    type:"GET_PRODUCTS",
    payload: data
  }
}
export function addToCart(product) {
    let orderItem = {
      _id: product._id,
      name: product.name,
      price: product.price,
      qty: 1
    }
    return {
      type:"ADD_TO_CART",
      payload: orderItem
    }
}
export function addProduct(newProduct) {
  return {
    type: "ADD_PRODUCT",
    payload: newProduct
  }
}
export function updateProduct(modifiedProduct) {
  return {
    type: "UPDATE_PRODUCT",
    payload: modifiedProduct
  }
}
export function deleteProduct(productId) {
  return {
    type: "DELETE_PRODUCT",
    payload: productId
  }
}