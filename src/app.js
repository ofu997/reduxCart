"use strict"

import {applyMiddleware, createStore, combineReducers} from 'redux';
import { Server } from 'https';
import logger from 'redux-logger';
// import combined reducers
import reducers from './reducers/index';

// import actions
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from "./actions/booksActions";
// revision
const middleware = applyMiddleware(logger);
const store = createStore(reducers,middleware);
  // Tim's solution
    // STEP 1 create the store
    // const createStoreWithMiddleware = applyMiddleware(logger);
    // const store = createStoreWithMiddleware(reducers);
// store.subscribe(function(){
//   console.log('current state is: ',
//   store.getState());  
// })

// STEP 2 create and dispatch actions
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