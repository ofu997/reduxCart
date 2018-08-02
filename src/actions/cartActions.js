'use strict'

// add to cart
export function addToCart(book){
  return {
    type:'add to cart',
    payload: book,
  }
}