import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions";
import { createCharacter } from "./helper";

function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;

    case REMOVE_CHARACTER:
      heroes = removeCharacter([...state], action.id);
      return heroes;
    default:
      return state;
  }
}

function removeCharacter(heroes, id) {
  let characters = heroes.filter(hero => hero.id !== id);
  return characters;
}
export default heroes;
