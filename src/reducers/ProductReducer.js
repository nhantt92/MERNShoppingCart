let productsData = [
/*     {id: 1, name: 'Samsung', price:10000},
    {id: 2, name: 'HTC', price:20000},
    {id: 3, name: 'One Plus', price:30000}, */
];
export let productReducer = (state=productsData, action) => {
  switch(action.type) {
    case "GET_PRODUCTS":
      return action.payload;
    case "ADD_TO_CART":
      return state.filter((e)=>e._id !== action.payload._id);
    case "REMOVE_FROM_CART" :
      return [...state, action.payload];
    case "ADD_PRODUCT" :
      return [...state, action.payload];
    case "DELETE_PRODUCT" :
      let delIndex = state.findIndex((e) => e._id == action.payload )
      return [...state.slice(0, delIndex), ...state.slice(delIndex + 1)];
    case "UPDATE_PRODUCT" :
      let updateIndex = state.findIndex((e) => e.id == action.payload._id )
      return [...state.slice(0, updateIndex), action.payload, ...state.slice(updateIndex+1)];
    default:
        return state;
  }
}
