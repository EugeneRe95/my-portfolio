import React, { Component } from 'react'
import Particles from 'react-particles-js';

export class MyParticles extends Component {
    render() {
        return (
    
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 2000,
                            "density": {
                                "enable": false
                            }
                        },
                        "color": {
                            "value": "#f76f00"
                          },
                        "size": {
                            "value": 4,
                            "random": true,
                            "anim": {
                                "speed": 10,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 3,
                            "direction": "bottom",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 120,
                                "duration": 1,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 200,
                                "duration": 3
                            }
                        }
                    }
                }} 
                className="portfolio-animated-bg"/>
        )
    }
}

export default MyParticles
