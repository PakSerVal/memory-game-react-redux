import {CARDS_LOADED, SET_FLIPPED_CARDS, SET_GUESSED_CARDS} from "./actions-types";
import {getShuffledCards} from "../../cards-repository";
import {incrementMove, setGameOver} from "./game";

export function initField() {
    return dispatch => {
        const cards = getShuffledCards();

        dispatch(cardsLoaded(cards));
    };
}

export function flipCard(id) {
    return (dispatch, getState) => {
        const {list, flippedCards, guessedCards} = getState().cards;
        if (-1 !== flippedCards.indexOf(id)) {
            return;
        }

        const unGuessedFlipped = [];

        for (const card of flippedCards) {
            if (-1 === guessedCards.indexOf(card)) {
                unGuessedFlipped.push(card);
            }
        }

        const flipped = flippedCards.slice();

        if (unGuessedFlipped.length === 1) {
            if (list[id].imageId === list[unGuessedFlipped[0]].imageId) {
                const guessed = guessedCards.slice().concat([id, unGuessedFlipped[0]]);

                if (guessed.length === Object.keys(list).length) {
                    dispatch(setGameOver(true))
                }

                dispatch(setGuessedCards(guessed));
            } else {
                setTimeout(() => {
                    for (const cardId of [unGuessedFlipped[0], id]) {
                        const index = flipped.indexOf(cardId);
                        if (index !== -1) {
                            flipped.splice(index, 1);
                        }
                    }

                    dispatch(setFlippedCards(flipped.slice()));
                }, 500);
            }

            dispatch(incrementMove());
        } else {
            for (const cardId of unGuessedFlipped) {
                const index = flipped.indexOf(cardId);
                if (index !== -1) {
                    flipped.splice(index, 1);
                }
            }
        }

        flipped.push(id);

        dispatch(setFlippedCards(flipped));
    }
}

function cardsLoaded(cards) {
    return {
        type: CARDS_LOADED,
        cards
    }
}

function setFlippedCards(ids) {
    return {
        type: SET_FLIPPED_CARDS,
        ids
    }
}

function setGuessedCards(ids) {
    return {
        type: SET_GUESSED_CARDS,
        ids
    }
}
