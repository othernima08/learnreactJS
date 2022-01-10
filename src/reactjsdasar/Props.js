import React, { Component } from 'react'

export default class Props extends Component {
    // gantiMakanan(makananbaru){
    //     this.setState({
    //         food: makananbaru
    //     })
    // }

    //Props dapat diubah melalui State, gabisa diubah secara langsung
    
    render() {
        return (
            <div>
                <h2>Operan state yang menjadi Props: {this.props.food}</h2>
                <button onClick={() => this.gantiMakanan("Porks")}>Ganti makanan</button>    
            </div>
        )
    }
}
