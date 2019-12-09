import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';
import anime from 'animejs/lib/anime.es.js';
import ParicilesSkills from './ParicilesSkills';
import Skills from './Skills';
import ProjectItem from './ProjectItem';


export class MainSlider extends Component {
    constructor(props) {
        super(props)
        this.state = { projects: [] }
    }
    componentDidMount() {
        var textWrapper = document.querySelectorAll('.heading p');
        textWrapper.forEach((wrap) => {
            wrap.innerHTML = wrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
        });

        anime.timeline({ loop: false })
            .add({
                targets: '.heading p .letter',
                rotateY: [-90, 0],
                duration: 3000,
                delay: (el, i) => 80 * i
            });

        fetch('./portfolio_items.json')
            .then(response => response.json())
            .then(items => this.setState({ projects: items }))
    }
    render() {
        return (
            <AwesomeSlider cssModule={AwesomeSliderStyles} bullets={true} fillParent={true} organicArrows={true}>
                <div id="main"><div className="heading"><h1 className="animated fadeInLeftBig">Eugene <span style={{ color: 'rgb(247, 111, 0)' }}>Revutskiy </span></h1><p>Junior Front-end developer</p></div></div>
                <div id="skills"><ParicilesSkills /><Skills /></div>
                <div id="portfolio">
                    <div className="portfolio-container">
                        {
                            this.state.projects.map((item, index) => {
                                return <ProjectItem path={item.path} key={index} linkProject={item.linkProject} linkGithub={item.linkGithub} name={item.name} animDelay={index * 300} />
                            })
                        }</div>
                </div>
            </AwesomeSlider>
        )
    }
}

export default MainSlider
