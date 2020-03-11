import React, { Component } from 'react';

let skillsList = ["HTML5", "CSS3", "SASS/SCSS", "Responsive and adaptive layout", "JavaScript, ES5/ES6, DOM", "AJAX, Fetch API, Axios", "Git, Github", "NPM", "React js, JSX", "Redux", "Webpack", "Babel"];

let description = `Hi, my name is Eugene and I'm currently searching for opportunities to start my career as Front-end developer. <br/> Initially, I developed small JavaScript applications to practice and learn the basic principles. At the moment, I am developing more complicated and voluminous web applications on React, practicing different new technologies, and aim to move towards Full-stack, mastering all new trends. <br/> I realize, that real projects, teamwork, knowledge I can gain from others are inalienable to achieve my goal of becoming pro in what I really love. `

export class Skills extends Component {
    render() {
        return (
            <div id="skills-container">
                <div className="about">
                    <div className="about-container">
                        <div className="about-me"><div className="photo"></div><p>{description.split(' ').map((word, index) => {
                            if (word !== '<br/>') {
                                return <span key={index} className="animated fadeInUp" style={{ animationDelay: index * 60 + 'ms' }}>{word}&nbsp;</span>
                            } else {
                                return <br />
                            }
                        })}</p></div>
                        <div className="skills-list-items">
                            <h1>My Skills</h1>
                            <div className="skills-list-items-container">
                                {skillsList.map((item, index) => {
                                    return <p key={index} style={{ animationDelay: index * 300 + 'ms' }} className="animated flipInX rotateInDownLeft"><span>{item}</span></p>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills
