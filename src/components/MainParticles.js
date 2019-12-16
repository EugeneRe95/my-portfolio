import React, { Component } from 'react';
import Particles from 'react-particles-js';

export class MainParticles extends Component {
    constructor(props){
        super(props)
        this.state={number: ''}
    }
    componentDidMount(){
        let widthWindow=window.innerWidth;
        this.setState({number: widthWindow/10});
    }
    render() {
        return (
            <Particles params={{
                "particles": {
                    "number": {
                        "value": this.state.number
                    },
                    "size": {
                        "value": 3
                    },
                    "color":{
                        "value": "#f76f00"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} style={{position: 'absolute', top: '0', left:'0'}} width="100%" height="100%" />
        )
    }
}

export default MainParticles
