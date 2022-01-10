import React, { Component } from 'react'

export default class Sublifecycle extends Component {
    componentWillUnmount(){
        this.props.changeFood("Satay")
    }

    render() {
        return (
            <div>
                <h2>Komponen sub lifecycle</h2>
            </div>
        )
    }
}
