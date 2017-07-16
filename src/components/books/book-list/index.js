import React from 'react';
import BookItem from './book-item';

export default function BookList(props) {
  const { books, onSelectBook, isActiveTest } = props;
  return <ul>{
    books.map((book) => <BookItem isActiveTest={isActiveTest}
                                  onClick={() => onSelectBook(book)}
                                  key={book.title}
                                  book={book} />)
  }</ul>
}

BookList.propTypes = {
  isActiveTest:  React.PropTypes.func,
  onSelectBook: React.PropTypes.func.isRequired,
  books: React.PropTypes.array.isRequired
};
