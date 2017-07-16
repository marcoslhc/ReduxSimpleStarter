import {
  SELECT_BOOK
} from '../action-types';
export function selectBook(book) {
  return {
    type: SELECT_BOOK,
    book
  };
}
