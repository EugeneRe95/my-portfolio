import React, { Component } from 'react'


let icons = [{ class: "fab fa-facebook-square", link: "https://www.facebook.com/evgeniy.revutskiy.5" }, { class: "fab fa-github", link: "https://github.com/EugeneRe95?tab=repositories" }, { class: "fab fa-linkedin", link: "https://www.linkedin.com/in/eugene-revutskiy/" }];

export class SocialmediaIcons extends Component {
    render() {
        return (icons.map((icon, index) => (
                <p style={{ marginBottom: '10px'}} key ={index} className="animated fadeInLeft"><a href={icon.link} target="_blank" rel="noopener noreferrer"><i className={icon.class}></i></a></p>
        )))
    }
}

export default SocialmediaIcons

