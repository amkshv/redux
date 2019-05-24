import React, { Component } from 'react'

export default class List extends Component {
    render() {
        console.log(this.props)
        return (
            <p>counted <span className="App-counter">{ this.props.number }</span> mushrooms</p>
        )
    }
}
