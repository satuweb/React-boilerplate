import React from 'react';

class Date extends React.Component {
    constructor(props) {
        super(props); //passiamo props al costruttore di base
        this.state = { date: 0 }; //assegna il valore iniziale di this.state unico punto in cui puoi assegnare direttamente un valore a this.state
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState((state) => ({
            date: state.date + 1
          }));
      }

    render() {
        return (
            // Viene passata la classe dal componente padre con classStyle
            <div className={`date ${this.props.classStyle}`}> 
                <p>Sono le {this.state.date}</p>
            </div>
        )
    }
}

export default Date;