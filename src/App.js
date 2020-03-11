import React from 'react';
import './App.css';
import './animate.min.css'
import MainSlider from './components/MainSlider';
import Hamburger from './components/Hamburger';
import Menu from './components/Menu';
import SocialmediaIcons from './components/SocialmediaIcons';
import Contacts from './components/Contacts';



export class App extends React.Component {
  constructor(props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.hideMenu = this.hideMenu.bind(this)
    this.state = { shown: false, close: '', anim: '', zIndex: '-1', menuAnim: 'slideOutUp', menuOpacity: 0, animatedText: true, height: window.innerHeight }
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ height: window.innerHeight })
    })
  }
  toggleMenu() {
    if (this.state.shown) {
      this.setState({ shown: false, close: '', zIndex: '-1', menuAnim: 'slideOutUp', menuOpacity: 1, });
      document.querySelector('.awssld').classList.remove('rotated');
    } else {
      this.setState({ shown: true, close: ' close', zIndex: '2', menuAnim: 'slideInUp', menuOpacity: 1, });
      document.querySelector('.awssld').classList.add('rotated');
    }
  }
  hideMenu(event) {
    const e = event.target;
    if (e.closest('button')) {
      switch (e.getAttribute('data-page')) {
        case 'main':
          document.querySelector('.awssld__bullets button:nth-child(1)').click();
          break;
        case 'skills':
          document.querySelector('.awssld__bullets button:nth-child(2)').click();
          break;
        case 'portfolio':
          document.querySelector('.awssld__bullets button:nth-child(3)').click();
          break;
        default: console.log('hi')
          break;
      }
      this.toggleMenu();
    }
  }
  render() {
    return (
      <React.Fragment>
        <div id="sidebar" style={{ height: this.state.height }}>
          <Hamburger close={this.state.close} toggleMenu={this.toggleMenu} />
          <div id="contacts"><Contacts id="phone" icon="fas fa-phone-square-alt" text="+38(067)-465-59-56" /><Contacts id="mail" icon="fas fa-envelope-square" text="revytskiy.evgen@gmail.com" /><a href="https://drive.google.com/open?id=1fx18K7Jv-AvT3NChYhggxaT7Ya7evVbY" target="_blank" rel="noopener noreferrer"><Contacts id="cv" icon="fa fa-file" text="Click to open my CV" /></a></div>
          <div id="socialmedia-icons"><SocialmediaIcons /></div>
        </div>
        <div id="main-carousel" style={{ height: this.state.height }}>
          <MainSlider />
        </div>
        <div id="menu-mobile" style={{ zIndex: this.state.zIndex, height: this.state.height }}>
          <Menu hideMenu={this.hideMenu} menuAnim={this.state.menuAnim} opacity={this.state.menuOpacity} />
        </div>
      </React.Fragment>
    );
  }
}
export default App;
