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
        window.addEventListener('resize', ()=>{
            let width=window.innerWidth;
            this.setState({number: width/10});
        })
    }
    render() {
        return (
            <Particles params={{
                "particles": {
                    "number": {
                        "value": this.state.number
                    },
                    "size": {
                        "value": 4
                    },
                    "color":{
                        "value": "#f76f00"
                    },
                    "move":{
                        "speed": 6
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    }
                }
            }} style={{position: 'absolute', top: '0', left:'0'}} width="100%" height="100%" />
        )
    }
}

export default MainParticles
