import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle';

export default class Lifecycle extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             food: "Meatballs",
             data: {},
             subOpen: false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then((json => {this.setState({
                data: json
            })
        }))
    }

    changeFood (value) {
        this.setState({
            food: value
        })
    }
    
    render() {
        // console.log("Data: ", this.state.data);
        return (
            <div>
                <h2>{this.state.food}</h2>
                <button onClick = {() => this.setState({subOpen: !this.state.subOpen})}> Tampilkan sublifecycle</button>
                <br />

                {this.state.subOpen && <Sublifecycle changeFood={(value) => this.changeFood(value)}/>}
            </div>
        )
    }
}
