import { COMMENT_CREATE } from './types';
import { errorOn } from './actions';

const badWords = ['козел', 'осел'];

export function spamFilter({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === COMMENT_CREATE) {
        const hasBadWords = badWords.some(res => action.data.text.includes(res));
        if (hasBadWords) {
          return dispatch(errorOn('Уважайте людей!'));
        }
      }
      return next(action);
    }
  }
}