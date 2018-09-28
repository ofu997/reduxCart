'use strict'
import React from 'react';
// connects component to redux store
import {connect} from "react-redux";
// dispatch actions from react
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/booksActions';

class BooksList extends React.Component{
  componentDidMount(){
    // dispatch an action
    this.props.getBooks();
  }
  render(){
    const booksList = this.props.books.map(function(booksArr){
      return(
        <div key={booksArr.id}>
          <h2>{booksArr.title}</h2>
          <h2>{booksArr.description}</h2>
          <h2>{booksArr.price}</h2>
        </div>
      )
    })
    return(
      <div>
        <h1>Hello, I'm bookslist.js</h1>
        {booksList}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    books: state.books.books
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getBooks: getBooks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);