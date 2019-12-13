import React, { Component } from 'react'

export class Menu extends Component {
    render() {
        return (
            <div className={"menu-mobile-container animated " + this.props.menuAnim + " delay-800ms"} style={{ display: 'flex', opacity: this.props.opacity}}>
                <ul onClick={this.props.hideMenu}>
                    <li><button data-page="main">Main</button ></li>
                    <li><button data-page="skills">About</button ></li>
                    <li><button data-page="portfolio">My projects</button ></li>
                </ul>
            </div>
        )
    }
}

export default Menu
