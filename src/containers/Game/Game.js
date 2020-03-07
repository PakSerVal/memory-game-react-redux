import React from "react";
import classes from "./Game.module.css";
import {connect} from "react-redux";
import GameOver from "../../components/GameOver/GameOver";
import {startNewGame} from "../../store/actions/game";

class Game extends React.Component {

    clickNewGameHandler = () => {
        this.props.startNewGame();
    };

    render() {
        return (
            <div className={classes.Game}>
                {
                    this.props.isOver
                        ? <GameOver moves={this.props.moves} onStartNewGame={this.clickNewGameHandler} />
                        : <div className={classes.GameTitle}>Find pairs of images under the following tiles</div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isOver: state.game.isOver,
        moves: state.game.moves,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        startNewGame: () => dispatch(startNewGame()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
