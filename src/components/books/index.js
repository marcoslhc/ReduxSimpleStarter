import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from './book-list';
import { bindActionCreators } from 'redux';
import { bookActions } from '../../actions';

class Books extends Component {

  render() {
    const {books} = this.props;
    return <BookList  isActiveTest={(book) => this.props.book.title === book.title}
                      onSelectBook={(book) => this.props.selectBook(book)}
                      books={books} />
  };
}

function mapStateToProps(state) {
  return {
    book: state.book,
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectBook: bookActions.selectBook
  }, dispatch);
};
Books.propTypes = {
  books: React.PropTypes.array,
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);
