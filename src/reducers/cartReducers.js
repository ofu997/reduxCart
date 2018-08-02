'use strict'

// cart reducers
export function cartReducers(state={cart:[]}, action){
  switch(action.type){
    case "add to cart":
    //let cartVar = state.cart.concat(action.payload);
    //return {cartVar};
    return {cart:[ ...state.cart, ...action.payload]}
    break;
  }
  return state;
}