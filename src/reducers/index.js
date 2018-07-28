'use strict'
import {combineReducers} from 'redux';

// here import reducers to be combined
import {booksReducers} from './booksReducers'

// here combine the reducers
export default combineReducers({
  books: booksReducers
})