import { combineReducers } from "redux";

import heroes from './heroes_reducer';
import characters from './characters_reducers';

const rootReducer = combineReducers({
  characters,
  heroes
});

export default rootReducer;
