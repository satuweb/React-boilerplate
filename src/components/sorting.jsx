import React from 'react';

class Sorting extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {value: 'default'};
        this.dataSorting = [
            {
                label: 'Default',
                value: 'default'
            },
            {
                label: 'By name',
                value: 'name'
            },
            {
                label: 'By price',
                value: 'price'
            }
        ]
    }
    
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('Ordinato per: ' + this.state.value);
        event.preventDefault();
    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <span>Ordina per:</span>
                <select
                    value={this.state.value}
                    onChange={this.handleChange}>
                        {this.dataSorting.map((sort, index) =>
                            <option key={index} value={sort.value}>{sort.label}</option>
                        )}

                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Sorting