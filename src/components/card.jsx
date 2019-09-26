import React, {Component, Fragment} from 'react';
import Image from '../elements/image'
import Date from '../elements/date'
import Button from '../elements/button'
class Card extends React.Component {
    render() {
        return (
            <div className="Card">
                <Image classStyle="Card__image" avatar={this.props.author} />
                <Date classStyle="Card__date" />
                <Button classStyle="Card__cta" />
            </div>
        )
    }
}

export default Card;