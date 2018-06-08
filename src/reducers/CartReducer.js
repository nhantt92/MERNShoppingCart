let cartData = []
export let cartReducer = (state=cartData, action) => {
  switch(action.type) {
    case "ADD_TO_CART" :
      //console.log("Cart reducer ADD to cart");
      let cp = [...state, action.payload]
      return cp;
    case "REMOVE_FROM_CART" :
      //console.log("Product reducer ADD to cart");
      let ms = state.filter((e)=>e._id !== action.payload._id);
      return ms;
    default:
      return state;
  }
}