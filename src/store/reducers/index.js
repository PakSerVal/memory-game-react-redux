import {combineReducers} from "redux";
import cardsReducer from "./cards";
import gameReducer from "./game";

export default combineReducers({
    cards: cardsReducer,
    game: gameReducer,
});
