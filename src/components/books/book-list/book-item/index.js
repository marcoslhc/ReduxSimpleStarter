import React from 'react';
import { active } from './book-item.scss';

export default function BookItem(props) {
  const { book, onClick, isActiveTest } = props;
  return <li style={isActiveTest(book) ? active : {}}
             onClick={onClick}
             className="list-group-item">
             {book.title}
         </li>;
}

BookItem.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  book: React.PropTypes.object.isRequired
};
