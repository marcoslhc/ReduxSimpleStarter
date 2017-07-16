import {
  SELECT_BOOK
} from '../../actions/action-types';

const initialState = {};
export default function (state = initialState, action) {
  const { type, book } = action;
  switch (type) {
    case SELECT_BOOK:
      return {...state, ...book}
    default:
      return state;
  }
}
