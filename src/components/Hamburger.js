import React, { Component } from 'react';

export class Hamburger extends Component {
    render() {
        return (
                <div className={"hamburger-container animated fadeInLeft" + this.props.close} onClick={this.props.toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
        )
    }
}

export default Hamburger
