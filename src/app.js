"use strict"

import {createStore} from 'redux';
import { Server } from 'https';

// import combined reducers
import reducers from './reducers/index';

// STEP 1 create the store
const store = createStore(reducers);
store.subscribe(function(){
  console.log('current state is: ',
  store.getState());  
})

// STEP 2 create and dispatch actions
store.dispatch({
  type:"post book",
  // change to array
  payload:[
    {
      id:1,
      title:"this is the title",
      description:"this is the description",
      price: 10,
    },{
      id:2,
      title:"this is the 2nd book title",
      description:"this is the 2nd book description",
      price: 20,
    },
  ]
})

// delete a book
store.dispatch({
  type:"delete book",
  payload:
    {
      id:2,
    }
})

// update a book
store.dispatch({
  type: "update book",
  payload: {
    id: 1,
    title: "James and the Giant Peach",
  }
})


