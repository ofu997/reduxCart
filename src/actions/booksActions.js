'use strict'

//post a book
export function postBooks(book){
  return {
    type:"post book",
    // change to array
    payload:book
    /*
    [
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
    */
  }
}

// delete a book
export function deleteBooks(id){
  return {
    type: 'delete book',
    payload: id
  }
}

// update 
export function updateBooks(book){
  return {
      type: "update book",
      payload:
      book
      /*
      {
        id: 1,
        title: "James and the Giant Peach",
      }
      */
  }
  
}