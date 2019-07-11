import * as types from './../actions/ktszActionTypes';
import {FULFILLED} from './../actions/promiseActionTypes';

export default function ktszReducer(state = {}, action = {}, root={}) {
  const {type, payload, error, meta = {}} = action;
  switch (type) {
    case `${types.FETCH_WORDS}_${FULFILLED}`: {
      return {
        ...state,
        words: payload
      };
    }
    
    default:
      return state;
  }
};