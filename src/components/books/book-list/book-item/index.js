import React from 'react';

export default function BookItem(props) {
  const { book, onClick } = props;
  return <li onClick={onClick} className="list-group-item">{book.title}</li>;
}

BookItem.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  book: React.PropTypes.object.isRequired
};
