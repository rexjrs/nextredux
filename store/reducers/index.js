import { combineReducers } from 'redux';
import count from './countReducer';
import lang from './languageReducer';

export default combineReducers({
    count,
    lang
})
