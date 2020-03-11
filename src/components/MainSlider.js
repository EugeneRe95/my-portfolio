import React, { Component } from 'react';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/open-animation';

import FlipMove from 'react-flip-move';
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
import project_9 from '../img/project_9.PNG';
import project_10 from '../img/project_10.PNG';
import project_11 from '../img/project_11.PNG';
import project_12 from '../img/project_12.PNG';
import project_13 from '../img/project_13.PNG';
import project_14 from '../img/project_14.PNG';


let position = 'Junior Front-end developer';

export class MainSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    path: project_9,
                    linkProject: "https://eugenere95.github.io/trumba-trans/",
                    linkGithub: "https://github.com/EugeneRe95/trumba-trans",
                    name: "Logistic website",
                    type: 'React js',
                    technologies: 'HTML5, CSS3, JavaScript, React, animate.css, wow.js, material-ui'
                },
                {
                    path: project_10,
                    linkProject: "https://eugenere95.github.io/lerestaurante/",
                    linkGithub: "https://github.com/EugeneRe95/lerestaurante",
                    name: "Restaurant website",
                    type: 'React js',
                    technologies: 'HTML5, CSS3, JavaScript, React, React Routing, animate.css, material-ui'
                },
                {
                    path: project_11,
                    linkProject: "https://eugenere95.github.io/functional-table/",
                    linkGithub: "https://github.com/EugeneRe95/functional-table",
                    name: "Functional table",
                    type: 'React js',
                    technologies: 'HTML5, SCSS, JavaScript, React, React Routing, material-ui'
                },
                {
                    path: project_12,
                    linkProject: "https://eugenere95.github.io/star_wars_api/",
                    linkGithub: "https://github.com/EugeneRe95/star_wars_api",
                    name: "Star wars API",
                    type: 'React js',
                    technologies: 'HTML5, SCSS, JavaScript, React, material-ui'
                },
                {
                    path: project_13,
                    linkProject: "https://eugenere95.github.io/game_in_dots/",
                    linkGithub: "https://github.com/EugeneRe95/game_in_dots",
                    name: "Game in dots",
                    type: 'React js',
                    technologies: 'HTML5, SCSS, JavaScript, React, material-ui'
                },
                {
                    path: project_14,
                    linkProject: "https://eugenere95.github.io/trackers_list/",
                    linkGithub: "https://github.com/EugeneRe95/trackers_list",
                    name: "Trackers_list",
                    type: 'React js',
                    technologies: 'CSS3, JavaScript, React, material-ui, localStorage, moment js'
                },
                {
                    path: project_1,
                    linkProject: "https://eugenere95.github.io/weight_converter/",
                    linkGithub: "https://github.com/EugeneRe95/weight_converter",
                    name: "Weight converter",
                    type: 'JavaScript',
                    technologies: 'HTML5, CSS3, Bootstrap, JavaScript'
                },
                {
                    path: project_2,
                    linkProject: "https://eugenere95.github.io/rps_game/",
                    linkGithub: "https://github.com/EugeneRe95/rps_game",
                    name: "Rock Paper Scissors Game",
                    type: 'JavaScript',
                    technologies: 'HTML5, CSS3, JavaScript'
                },
                {
                    path: project_3,
                    linkProject: "https://eugenere95.github.io/fullscreen_slider/",
                    linkGithub: "https://github.com/EugeneRe95/fullscreen_slider",
                    name: "Fullscreen Slider",
                    type: 'JavaScript',
                    technologies: 'HTML5, CSS3, JavaScript'
                },
                {
                    path: project_4,
                    linkProject: "https://eugenere95.github.io/fancy_form/",
                    linkGithub: "https://github.com/EugeneRe95/fancy_form",
                    name: "Fancy Form",
                    type: 'JavaScript',
                    technologies: 'HTML5, CSS3, JavaScript'
                },
                {
                    path: project_5,
                    linkProject: "https://eugenere95.github.io/dynamic_lp/",
                    linkGithub: "https://github.com/EugeneRe95/dynamic_lp",
                    name: "Dynamic Landing Page",
                    type: 'JavaScript',
                    technologies: 'HTML5, CSS3, JavaScript, Local Storage'
                },
                {
                    path: project_6,
                    linkProject: "https://eugenere95.github.io/bookmarker/",
                    linkGithub: "https://github.com/EugeneRe95/bookmarker",
                    name: "Bookmarker",
                    type: 'JavaScript',
                    technologies: 'HTML5, CSS3, Bootstrap, JavaScript, Local Storage'
                },
                {
                    path: project_7,
                    linkProject: "https://eugenere95.github.io/todo_list-ciklum_task_internship/",
                    linkGithub: "https://github.com/EugeneRe95/todo_list-ciklum_task_internship",
                    name: "Todo list",
                    type: 'JavaScript',
                    technologies: 'HTML5, CSS3, JavaScript, Local Storage'
                },
                {
                    path: project_8,
                    linkProject: "https://eugenere95.github.io/book_list/",
                    linkGithub: "https://github.com/EugeneRe95/book_list",
                    name: "Book list",
                    type: 'JavaScript',
                    technologies: 'HTML5, CSS3, JavaScript, Local Storage'
                }
            ],
            filteredItems: [],
            type: 'All'
        }
    }
    filterProjects(e) {
        let items = this.state.items;
        if (e.target.closest('button')) {
            document.querySelectorAll('.portfolio-buttons button').forEach(button => {
                button.classList.remove('active')
            })
            e.target.classList.add('active')
            this.setState({ type: e.target.value }, () => {
                if (this.state.type === 'All') {
                    this.setState({ filteredItems: items })
                } else {
                    this.setState({ filteredItems: items.filter(item => item.type === this.state.type) })
                }
            })
        }
    }
    componentDidMount() {
        this.setState({ filteredItems: this.state.items })
    }
    render() {
        const buttons = ['All', 'React js', 'JavaScript']
        return (
            <AwesomeSlider cssModule={AwesomeSliderStyles} bullets={true} fillParent={true} organicArrows={true} mobileTouch={false} >
                <div id="main">
                    <MainParticles />
                    <div className="heading"><h1 className="animated fadeInLeftBig">Eugene <span style={{ color: 'rgb(247, 111, 0)' }}>Revutskiy </span></h1>
                        <p>{position.split('').map((word, index) => {
                            if (word === ' ') {
                                return <span key={index} className="animated rollIn" style={{ animationDelay: index * 60 + 'ms' }}>&nbsp;</span>
                            } else {
                                return <span key={index} className="animated rollIn" style={{ animationDelay: index * 60 + 'ms' }}>{word}</span>
                            }
                        })}
                        </p>
                    </div>
                </div>
                <div id="skills"><Skills users={[]} /></div>
                <div id="portfolio">
                    <h1 style={{ marginTop: "40px", fontSize: "40px", textShadow: "10px 10px 25px #000" }}>My Projects</h1>
                    <div className="portfolio-buttons" onClick={this.filterProjects.bind(this)}>
                        {buttons.map((item, index) => {
                            return (item === this.state.type) ? <button value={item} key={index} className="active">{item}</button> : <button value={item} key={index}>{item}</button>
                        }
                        )}
                    </div>
                    <FlipMove enterAnimation="elevator" appearAnimation="elevator" leaveAnimation="elevator" duration={800} delay={200} staggerDelayBy={100} className="portfolio-container">
                        {this.state.filteredItems.map((item) => {
                            return <ProjectItem path={item.path} key={item.name} techs={item.technologies} linkProject={item.linkProject} linkGithub={item.linkGithub} name={item.name} />
                        })}
                    </FlipMove>
                </div>
            </AwesomeSlider>

        )
    }
}

export default MainSlider
