import React , {Component} from "react";
// import logo from './assets/logo.svg';

import Home from "./../Home/index";
import About from "./../About/index";
import Profile from "./../Profile/index";
import PortFolio from "./../PortFolio/index";
import SocialMedia from "./../SocialMedia/index";
import Work from "./../Work/index";
import Footer from "./../Footer";

// function App() {
class Index extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Work/>
        <PortFolio  />
        <Profile  />
        <About  />
        <SocialMedia  />
        <Footer  />
      </div>
    );
  }
}

export default Index;


