import React, { Component } from 'react';

let skillsList = ["HTML5", "CSS3", "SASS/SCSS", "Responsive and adaptive layout", "JavaScript, ES5/ES6, DOM", "AJAX, Fetch API", "Git, Github", "NPM", "React js, JSX", "Redux", "Webpack", "Babel"];
let description = `Hi, my name is Eugene and I'm currently searching for opportunities to start my career as Front-end developer. I believe that being truly passionate about your job is the main key to succeed. In my opinion, real projects, teamwork, knowledge I can gain from others are inalienable to achieve my goal of becoming pro in what I really love. `
export class Skills extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="about">
                    <div className="about-container">
                        <div className="about-me"><div className="photo"></div><p>{description.split(' ').map((word, index) => {
                            return <span key={index} className="animated flipInX" style={{ animationDelay: index * 60 + 'ms' }}>{word}&nbsp;</span>
                        })}</p></div>
                        <div className="skills-list-items">
                            <h1>My Skills</h1>
                            <div className="skills-list-items-container">
                            {skillsList.map((item, index) => {
                                return <p key={index} style={{ animationDelay: index * 300 + 'ms' }} className="animated fadeInUp"><span>{item}</span></p>
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Skills
