import {INCREMENT_MOVE, START_NEW_GAME, SET_GAME_OVER} from "../actions/actions-types";

const initialState = {
    isOver: false,
    moves:  0,
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAME_OVER: {
            return  {...state, isOver: action.isOver}
        }
        case INCREMENT_MOVE: {
            return  {...state, moves: state.moves + 1}
        }
        case START_NEW_GAME: {
            return {moves: 0, isOver: false};
        }
        default:
            return state;
    }
};

export default gameReducer;
