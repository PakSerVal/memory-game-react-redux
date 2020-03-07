import React from "react";
import classes from "./Card.module.css";

const Card = props => {
    const innerClasses = [classes.Inner];
    if (props.isFlipped) {
        innerClasses.push(classes.InnerFlipped);
    }

    return (
        <div className={classes.Card} onClick={() => props.onClick(props.card.id)}>
            <div className={innerClasses.join(' ')}>
                <div className={classes.Front}/>
                <div className={classes.Back}>
                    <img src={props.card.imageSrc} alt={'card ' + props.card.id} />
                </div>
            </div>
        </div>
    )
};

export default Card;
