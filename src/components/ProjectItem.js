import React, { Component } from 'react';
// import ImageContentHover from 'react-image-hover';
import '@fortawesome/fontawesome-free/css/all.css';

export class ProjectItem extends Component {
    // hoverBlock(event) {
    //    (!this.state.display) ? this.setState({display: true , opacity: "1",transform:'rotate(0deg) scale(1)', top: "0%", left: "0"}) : this.setState({display: false, opacity: "0", transform:'rotate(-90deg) scale(0.1)', top: "-100%", left: "100%"});
    // }
    render() {
        return (
            <div className={"portfolio-item animated fadeInUpBig"} style={{ background: `url(${this.props.path}) no-repeat center top /cover`, animationDelay: this.props.animDelay+'ms'}} onClick={void(0)}>
                <div className="item-container">
                    <h2 style={{margin:'8px'}}>{this.props.name}</h2>
                    <div>
                    <p><a href={this.props.linkGithub} target="_blank" rel="noopener noreferrer">Github <i className="fab fa-github"></i></a></p>
                    <p><a href={this.props.linkProject} target="_blank" rel="noopener noreferrer">Show project <i className="fas fa-desktop"></i></a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectItem
