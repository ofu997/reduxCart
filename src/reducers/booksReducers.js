'use strict'

//STEP 3 define reducers
export function booksReducers(state={books:[]}, action){
  switch(action.type){
    case "post book":
    return {books:[...state.books,...action.payload]}
    break;   

    case "delete book":
    // create a copy of the current array of books
    const deleteBookArray = [ ...state.books]
    // determine index of book being deleted with findIndex, 
    // not to be confused with indexOf()
    const indexToDelete = deleteBookArray.findIndex(
      // function(bookForDeleting){
      //   return bookForDeleting.id === action.payload.id;
      // }
      (bookForDeleting) => {
        return bookForDeleting.id === action.payload.id;
      }
    )
    // remove the book at the specified index
    /* slicing example: 
    // take out camel: 
    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log( ...animals.slice(0,2), ...animals.slice(3));
    */
    return {books: [...deleteBookArray.slice(0, indexToDelete), 
    ...deleteBookArray.slice(indexToDelete +1)]}
    break;

    case "update book":
    const updateBookArray = [ ...state.books]
    const indexToUpdate = updateBookArray.findIndex(
      (bookToUpdate) => {
        return bookToUpdate.id = action.payload.id;
      }
    )
    // experiments
    /*
    const updatedBook = updateBookArray[indexToUpdate];
    
    const updateTheBook = (updatedBook) =>{
      updatedBook.title===action.payload.title;
      return updatedBook;
    }
    */
    
    const updatedBook = {
      ...updateBookArray[indexToUpdate], 
      // below are setters
      title: action.payload.title, 
      // description: "James finds adventure"
    }
    
    return {books: [ ...updateBookArray.slice(0, indexToUpdate), updatedBook, ...updateBookArray.slice(indexToUpdate+1)]}
    break;
  }
  return state;
}