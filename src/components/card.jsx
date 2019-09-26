import React, {Component, Fragment} from 'react';
import Image from '../elements/image'
import Date from '../elements/date'
import Favorite from '../elements/favorite'
import Cta from '../elements/cta'
class Card extends React.Component {
    render() {
        return (
            <div className="Card">
                <Image classStyle="Card__image" avatar={this.props.author} />
                <Date classStyle="Card__date" />
                <Favorite classStyle="Card__cta Card__cta--favorite" />
                <Cta ctaData={{url: 'www.aruq.it', label: 'CTA Label'}} classStyle="Card__cta" />
            </div>
        )
    }
}

export default Card;