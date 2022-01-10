import React, { Component } from 'react'
import Props from './Props';

export default class StateProps extends Component {
    constructor(props){
        super(props);
        this.state = {
            food: 'Meatballs'
        }
    }

    gantiMakanan = (makananbaru) => {
        this.setState({
            food: makananbaru
        })
    }

    render() {
        return (
            <div>
                <h2>Jenis makanan: {this.state.food}</h2>
                <button onClick={() => this.gantiMakanan("Porks")}>Ganti makanan</button>
                <Props food={this.state.food} gantiMakanan={this.gantiMakanan}/>
            </div>
        )
    }
}
