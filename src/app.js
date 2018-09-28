"use strict"
import React from 'react';
import {render} from 'react-dom';
// passes store as props to react components 
import {Provider} from "react-redux";

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
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('app')
);

// >>BOOK ACTIONS<<
// Create and dispatch actions
// store.dispatch(postBooks(
//   [
//     {
//       id: 1,
//       title: "this is the book title",
//       description: "this is the book description",
//       price: 10.00
//     },
//     {
//       id: 2,
//       title: "this is the 2nd book title",
//       description: "this is the 2nd book description",
//       price: 20.00
//     }
//   ]
// ))

/*in one window run webpack, 	
and in another run npm start and node server.js*/	

// package.json original start: "start": "webpack-dev-server --progress --colors" 
// vs "start": "webpack-dev-server --progress --mode=development --colors --content-base . --config ./webpack.config.js"