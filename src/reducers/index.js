'use strict'
import {combineReducers} from 'redux';

// here import reducers to be combined
import {booksReducers} from './booksReducers';
import {cartReducers} from './cartReducers';

// here we combine the reducers, which hold the state of books or carts
export default combineReducers({
  books: booksReducers,
  cart: cartReducers
})

