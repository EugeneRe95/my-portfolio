import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

export class ProjectItem extends Component {
    render() {
        return (
                <div className="portfolio-item" style={{ background: `url(${this.props.path}) no-repeat center top /cover`}} onClick={void (0)}>
                    <div className="item-container">
                        <h2 style={{ margin: '8px' }}>{this.props.name}</h2>
                        <p className="technologies">{this.props.techs}</p>
                        <div>
                            <p className="project-link"><a href={this.props.linkGithub} target="_blank" rel="noopener noreferrer">Github <i className="fab fa-github"></i></a></p>
                            <p className="project-link"><a href={this.props.linkProject} target="_blank" rel="noopener noreferrer">Show project <i className="fas fa-desktop"></i></a></p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ProjectItem
