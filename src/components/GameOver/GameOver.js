import React from "react";
import classes from "./GameOver.module.css";

const GameOver = (props) => {
    return <div className={classes.GameOver}>
        <div className={classes.Title}>
            Bravo! You did it in {props.moves} moves!
        </div>
        <button className={classes.ButtonStart} onClick={props.onStartNewGame}>Start new game</button>
    </div>
};

export default GameOver;
