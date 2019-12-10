import React, { Component } from 'react';
import Particles from 'react-particles-js';

export class MainParticles extends Component {
    render() {
        return (
            <Particles params={{
                "particles": {
                    "number": {
                        "value": 100
                    },
                    "size": {
                        "value": 3
                    },
                    "color":{
                        "value": "#f76f00"
                    },
                    "move":{
                        "direction": "bottom"
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
