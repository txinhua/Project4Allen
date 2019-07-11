import {AsyncStorage} from 'react-native';
import {createAction} from 'redux-actions';
import * as types from './ktszActionTypes';
import WordModel from './../data/Word';
import {ktszList} from './../api/ktsz/axios_ktsz';


const WORD_KEY = 'rabbity-words';

let getWordsFromObj = (val) => {
  if (val != null) {
    return JSON.parse(val).map(wordObj => {
      return WordModel.fromObject(wordObj);
    });
  } else {
    console.info(`${WORD_KEY} not found on disk.`);
    return [];
  }
};

export const fetchWords = createAction(types.FETCH_WORDS, async () => {
    try {
      let val = await ktszList();
      return getWordsFromObj(val);
    } catch (error) {
      console.error('AsyncStorage error: ', error.message);
    }
});

