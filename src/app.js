/*in one window run webpack, 
and in another run npm start and node server.js*/

/*
// increment and decrement based on action
"use strict"
import {createStore} from 'redux';
import { Server } from 'https';
//STEP 3 define reducers
const reducer = function(state=0, action){
  switch(action.type){
    case "increment":
    return state+action.payload;
    break;    
    case "decrement":
    return state-action.payload;
    break;
  }
return state
}
// STEP 1 create the store
const store = createStore(reducer);
store.subscribe(function(){
  console.log('current state is: '+
  store.getState());

})
// STEP 2 create and dispatch actions
store.dispatch({
  type:"increment",payload:1
})
store.dispatch({
  type:"increment",payload:2
})
store.dispatch({
  type:"decrement",payload:6
})
*/

// pass entire object
/*
"use strict"
import {createStore} from 'redux';
import { Server } from 'https';

//STEP 3 define reducers
const reducer = function(state={}, action){
  switch(action.type){
    case "post book":
    return state=action.payload;
    break;    
  }
return state
}

// STEP 1 create the store
const store = createStore(reducer);
store.subscribe(function(){
  console.log('current state is: ',
  store.getState());  
  console.log('current price is: ',
  store.getState().price);
})

// STEP 2 create and dispatch actions
store.dispatch({
  type:"post book",
  payload:{
    id:1,
    title:"this is the title",
    description:"this is the description",
    price: 10,
  }
})
*/

/*
// pass arrays
"use strict"
import {createStore} from 'redux';
import { Server } from 'https';

//STEP 3 define reducers
const reducer = function(state=[], action){
  switch(action.type){
    case "post book":
    return state=action.payload;
    break;    
  }
return state
}

// STEP 1 create the store
const store = createStore(reducer);
store.subscribe(function(){
  console.log('current state is: ',
  store.getState());  
  console.log('current price is: ',
  store.getState()[1].price);
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
*/

/*
// CRUD
"use strict"
import {createStore} from 'redux';
import { Server } from 'https';

//STEP 3 define reducers
// state becomes object that can hold arrays
const reducer = function(state={books:[]}, action){
  switch(action.type){
    case "post book":
    let books = state.books.concat(action.payload);
    return {books};
    break;    
  }
return state;
}

// STEP 1 create the store
const store = createStore(reducer);
store.subscribe(function(){
  console.log('current state is: ',
  store.getState());  
  //console.log('current price is: ',
  //store.getState()[1].price);
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

// dispatch a second action

store.dispatch({
  type:"post book",
  payload:{
    id:3,
    title:"this is the 3rd title",
    description:"this is the 3rd description",
    price: 30,
  }
})
*/

// with spread operators
"use strict"
import {createStore} from 'redux';
import { Server } from 'https';

//STEP 3 define reducers
const reducer = function(state={books:[]}, action){
  switch(action.type){
    case "post book":
    return {books:[...state.books,...action.payload]}
    break;    
  }
return state;
}

// STEP 1 create the store
const store = createStore(reducer);
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

// dispatch a second action
store.dispatch({
  type:"post book",
  // change payload to array
  payload:[
    {
      id:3,
      title:"this is the 3rd title",
      description:"this is the 3rd description",
      price: 30,
    }
  ]
})



