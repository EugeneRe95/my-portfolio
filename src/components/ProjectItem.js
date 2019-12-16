import React, { Component } from 'react';
// import ImageContentHover from 'react-image-hover';
import '@fortawesome/fontawesome-free/css/all.css';

export class ProjectItem extends Component {
    constructor(props) {
        super(props)
        this.hoverBlock = this.hoverBlock.bind(this)
        this.state={display: false , opacity: "0", transform:'rotate(-90deg) scale(0.1)', top: "-100%", left: "100%"}
    }
    hoverBlock(event) {
       (!this.state.display) ? this.setState({display: true , opacity: "1",transform:'rotate(0deg) scale(1)', top: "0%", left: "0"}) : this.setState({display: false, opacity: "0", transform:'rotate(-90deg) scale(0.1)', top: "-100%", left: "100%"});
    }
    render() {
        return (
            <div className={"portfolio-item animated fadeInUpBig"} style={{ background: `url(${this.props.path}) no-repeat center top /cover`, animationDelay: this.props.animDelay+'ms'}} onMouseOver={this.hoverBlock} onMouseOut={this.hoverBlock}>
                <div className="item-container" style={{ opacity: this.state.opacity, transform: this.state.transform, top: this.state.top, left: this.state.left, transition: 'all 800ms ease-in' }}>
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
