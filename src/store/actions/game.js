import {INCREMENT_MOVE, SET_GAME_OVER, START_NEW_GAME} from "./actions-types";
import {initField} from "./cards";

export function startNewGame() {
    initField();

    return {
        type: START_NEW_GAME,
    }
}

export function incrementMove() {
    return {
        type: INCREMENT_MOVE,
    }
}

export function setGameOver(isOver) {
    return {
        type: SET_GAME_OVER,
        isOver,
    }
}
