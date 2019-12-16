import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip'


export class Contacts extends Component {
    constructor(props) {
        super(props);
        this.showTooltip=this.showTooltip.bind(this);
        this.hideTooltip=this.hideTooltip.bind(this);
        this.state = { isTooltipActive: false }
    }
    showTooltip() {
        this.setState({ isTooltipActive: true })
    }
    hideTooltip() {
        this.setState({ isTooltipActive: false })
    }
    render() {
        return (
            <React.Fragment>
                <div className="animated fadeInLeft" id={this.props.id} onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip}><i className={this.props.icon}></i></div>
                <ToolTip active={this.state.isTooltipActive} tooltipTimeout={0} position="right" arrow="center" parent={"#"+this.props.id}><p>{this.props.text}</p></ToolTip>
            </React.Fragment>
        )
    }
}

export default Contacts
