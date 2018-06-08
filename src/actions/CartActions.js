// Action Creator
export function removeFromCart(item) {
    return {
      type:"REMOVE_FROM_CART",
      payload:item
    }
  }
  