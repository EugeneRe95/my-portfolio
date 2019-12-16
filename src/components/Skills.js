import React, { Component } from 'react';

let skillsList = ["HTML5", "CSS3", "SASS/SCSS", "Responsive and adaptive layout", "JavaScript, ES5/ES6, DOM", "AJAX, Fetch API", "Git, Github", "NPM", "React js, JSX", "Redux", "Webpack", "Babel"];
let description = `Hi, my name is Eugene and my main goal for now is to become Front-end developer. One year ago I quit my previous job, which was not related to IT, due to the fact - I didn't really like it. So I started searching for a job I would become passionated about and would love not to look for anything else for a long time, as in my opinion, it's the main key to succeed. I really struggled in searching and have tried a lot of areas but something with my feelings was always wrong... till I found out about Front-end. My journey began...`
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
