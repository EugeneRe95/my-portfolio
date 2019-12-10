import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation';
import anime from 'animejs/lib/anime.es.js';
import ParicilesSkills from './ParicilesSkills';
import Skills from './Skills';
import MainParticles from "./MainParticles";
import ProjectItem from './ProjectItem';
import project_1 from '../img/project_1.PNG';
import project_2 from '../img/project_2.PNG';
import project_3 from '../img/project_3.PNG';
import project_4 from '../img/project_4.PNG';
import project_5 from '../img/project_5.PNG';
import project_6 from '../img/project_6.PNG';
import project_7 from '../img/project_7.PNG';
import project_8 from '../img/project_8.PNG';


export class MainSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    path: project_1,
                    linkProject: "https://eugenere95.github.io/weight_converter/",
                    linkGithub: "https://github.com/EugeneRe95/weight_converter",
                    name: "Weight converter"
                },
                {
                    path: project_2,
                    linkProject: "https://eugenere95.github.io/rps_game/",
                    linkGithub: "https://github.com/EugeneRe95/rps_game",
                    name: "Rock Paper Scissors Game"
                },
                {
                    path: project_3,
                    linkProject: "https://eugenere95.github.io/fullscreen_slider/",
                    linkGithub: "https://github.com/EugeneRe95/fullscreen_slider",
                    name: "Fullscreen Slider"
                },
                {
                    path: project_4,
                    linkProject: "https://eugenere95.github.io/fancy_form/",
                    linkGithub: "https://github.com/EugeneRe95/fancy_form",
                    name: "Fancy Form"
                },
                {
                    path: project_5,
                    linkProject: "https://eugenere95.github.io/dynamic_lp/",
                    linkGithub: "https://github.com/EugeneRe95/dynamic_lp",
                    name: "Dynamic Landing Page"
                },
                {
                    path: project_6,
                    linkProject: "https://eugenere95.github.io/bookmarker/",
                    linkGithub: "https://github.com/EugeneRe95/bookmarker",
                    name: "Bookmarker"
                },
                {
                    path: project_7,
                    linkProject: "https://eugenere95.github.io/todo_list-ciklum_task_internship/",
                    linkGithub: "https://github.com/EugeneRe95/todo_list-ciklum_task_internship",
                    name: "Todo list"
                },
                {
                    path: project_8,
                    linkProject: "https://eugenere95.github.io/book_list/",
                    linkGithub: "https://github.com/EugeneRe95/book_list",
                    name: "Book list"
                }
            ]
        }
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
    }
    render() {
        return (
            <AwesomeSlider cssModule={AwesomeSliderStyles} bullets={true} fillParent={true} organicArrows={true}>
                <div id="main"><MainParticles /> <div className="heading"><h1 className="animated fadeInLeftBig">Eugene <span style={{ color: 'rgb(247, 111, 0)' }}>Revutskiy </span></h1><p>Junior Front-end developer</p></div></div>
                <div id="skills"><ParicilesSkills /><Skills /></div>
                <div id="portfolio">
                    <h1 style={{ marginTop: "40px", fontSize: "40px", textShadow: "10px 10px 25px #000" }}>My Projects</h1>
                    <div className="portfolio-container">
                        {
                            this.state.items.map((item, index) => {
                                return <ProjectItem path={item.path} key={index} linkProject={item.linkProject} linkGithub={item.linkGithub} name={item.name} animDelay={index * 300} />
                            })
                        }</div>
                </div>
            </AwesomeSlider>
        )
    }
}

export default MainSlider
