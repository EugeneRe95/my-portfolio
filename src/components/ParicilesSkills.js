import React, { Component } from 'react';
import Particles from 'react-particles-js';

export class ParicilesSkills extends Component {
    render() {
        return (
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 10,
                            "density": {
                                "enable": true,
                                "value_area": 500
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "speed": 8,
                            "out_mode": "out"
                        },
                        "shape": {
                            "type": [
                                "images"
                            ],
                            "images": [
                                {
                                    "src": "img/icons/css.png",
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": "img/icons/html.png",
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": "img/icons/js.png",
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": "img/icons/react.png",
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": "img/icons/github.png",
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": "img/icons/sass.png",
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": "img/icons/webpack.png",
                                    "height": 100,
                                    "width": 100,
                                },
                                {
                                    "src": "img/icons/babel.png",
                                    "height": 100,
                                    "width": 100,
                                },
                                {
                                    "src": "img/icons/npm.png",
                                    "height": 100,
                                    "width": 100,
                                },
                                {
                                    "src": "img/icons/ajax.png",
                                    "height": 60,
                                    "width": 100,
                                }
                            ]
                        },
                        "color": {
                            "value": "#fff"
                        },
                        "size": {
                            "value": 30,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 4,
                                "size_min": 10,
                                "sync": false
                            }
                        }
                    },
                    "retina_detect": false
                }}
                className="skills-animated-bg"/>
        )
    }
}

export default ParicilesSkills
