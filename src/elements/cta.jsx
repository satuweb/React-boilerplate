import React from 'react';
class Cta extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: '' };

        // Necessario per accedere al corretto valore di `this` all'interno della callback
        this.goToDetail = this.goToDetail.bind(this);

    }

    goToDetail(value, e) {
        this.setState((state, props) => ({
            url: value
        }));
    }

    render() {
        console.log(this.state.url) // Check the state
        return (
            <button className={`button ${this.props.classStyle}`} onClick={(e) => this.goToDetail(this.props.ctaData.url, e)}>
                {this.props.ctaData.label}
            </button>
        );
    }
}

export default Cta;