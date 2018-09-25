"use strict"
import React from 'react';
import {render} from 'react-dom';

import {applyMiddleware, createStore, combineReducers} from 'redux';
import { Server } from 'https';
import logger from 'redux-logger';
// import combined reducers, which gets booksReducers and cartReducers from src/reducers
import reducers from './reducers/index';

// import actions
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from "./actions/booksActions";

const middleware = applyMiddleware(logger);
const store = createStore(reducers,middleware);
import BooksList from './components/pages/BooksList';

render(
  <BooksList />, document.getElementById('app')
)

// >>BOOK ACTIONS<<
// Create and dispatch actions
store.dispatch(postBooks(
  [
    {
      id: 1,
      title: "this is the book title",
      description: "this is the book description",
      price: 10.00
    },
    {
      id: 2,
      title: "this is the 2nd book title",
      description: "this is the 2nd book description",
      price: 20.00
    }
  ]
))

// delete a book
store.dispatch(deleteBooks(
{id: 1}
))

// update a book
store.dispatch(updateBooks(
  {
    id: 2, 
    title: "James and the Giant Peach",
  }
))

// >> CART ACTIONS <<
// add to cart
store.dispatch(addToCart([{id: 1}]))


/*in one window run webpack, 	
and in another run npm start and node server.js*/	

// package.json original start: "start": "webpack-dev-server --progress --colors" 
// vs "start": "webpack-dev-server --progress --mode=development --colors --content-base . --config ./webpack.config.js"