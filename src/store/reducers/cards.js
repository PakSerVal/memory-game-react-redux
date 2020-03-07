import {SET_FLIPPED_CARDS, CARDS_LOADED, SET_GUESSED_CARDS, START_NEW_GAME} from "../actions/actions-types";

const initialState = {
    list: {},
    flippedCards: [],
    guessedCards: [],
};

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CARDS_LOADED: {
            return  {...state, list: action.cards}
        }
        case SET_FLIPPED_CARDS: {
            return  {...state, flippedCards: action.ids}
        }
        case SET_GUESSED_CARDS: {
            return  {...state, guessedCards: action.ids}
        }
        case START_NEW_GAME: {
            return  {...state, guessedCards: [], flippedCards: []}
        }
        default:
            return state;
    }
};

export default cardsReducer;
