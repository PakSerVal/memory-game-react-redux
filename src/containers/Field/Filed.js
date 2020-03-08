import React from "react";
import classes from "./Field.module.css";
import {connect} from "react-redux";
import {flipCard, initField} from "../../store/actions/cards";
import Card from "../../components/Card/Card";

class Field extends React.Component {
    cardClickHandler = (id) => {
        this.props.flipCard(id);
    };

    componentDidMount() {
        this.props.initField();
    }

    render() {
        return (
            <div className={classes.Field}>
                {
                    Object.keys(this.props.cards).map(key => {
                        const card = this.props.cards[key];

                        const isFlipped = (-1 !== this.props.flippedCards.indexOf(card.id));

                        return <Card
                            key={card.id}
                            card={card}
                            onClick={this.cardClickHandler}
                            isFlipped={isFlipped}
                        />
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cards:        state.cards.list,
        flippedCards: state.cards.flippedCards,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        initField: () => dispatch(initField()),
        flipCard: (id) => dispatch(flipCard(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)
