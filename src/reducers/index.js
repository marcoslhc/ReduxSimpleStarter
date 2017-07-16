import { combineReducers } from 'redux';
import books from './books-reducer';
import book from './book-reducer';

const rootReducer = combineReducers({
  books,
  book
});

export default rootReducer;
