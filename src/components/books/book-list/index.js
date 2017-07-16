import React from 'react';
import BookItem from './book-item';

export default function BookList(props) {
  const { books, onSelectBook } = props;
  return <ul>{
    books.map((book) => <BookItem onClick={() => onSelectBook(book)} key={book.title} book={book} />)
  }</ul>
}

BookList.propTypes = {
  onSelectBook: React.PropTypes.func.isRequired,
  books: React.PropTypes.array.isRequired
};
