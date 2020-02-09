import React, { Component } from 'react';
import Particles from 'react-particles-js';

export class MainParticles extends Component {
    constructor(props){
        super(props)
        this.state={number: '', push: true}
    }
    componentDidMount(){
        let widthWindow=window.innerWidth;
        this.setState({number: widthWindow/10},()=>{
            if(widthWindow<500){
                this.setState({push: false})
            }
        });
        window.addEventListener('resize', ()=>{
            let width=window.innerWidth;
            this.setState({number: width/10},()=>{
                if(width<500){
                    this.setState({push: false})
                }else{
                    this.setState({push: true})
                }
            });
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
                            "enable": this.state.push,
                            "mode": "push"
                        }
                    }
                }
            }} style={{position: 'absolute', top: '0', left:'0'}} width="100%" height="100%" />
        )
    }
}

export default MainParticles
