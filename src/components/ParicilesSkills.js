import React, { Component } from 'react';
import Particles from 'react-particles-js';
import iconAjax from '../img/icons/ajax.png';
import iconBabel from '../img/icons/babel.png';
import iconCss from '../img/icons/css.png';
import iconGithub from '../img/icons/github.png';
import iconHtml from '../img/icons/html.png';
import iconJs from '../img/icons/js.png';
import iconNpm from '../img/icons/npm.png';
import iconReact from '../img/icons/react.png';
import iconSass from '../img/icons/sass.png';
import iconWebpack from '../img/icons/Webpack.png';

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
                                    "src": iconAjax,
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": iconBabel,
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": iconCss,
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": iconGithub,
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": iconHtml,
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": iconJs,
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": iconNpm,
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": iconSass,
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": iconReact,
                                    "height": 70,
                                    "width": 70,
                                },
                                {
                                    "src": iconWebpack,
                                    "height": 70,
                                    "width": 70,
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
