import React from 'react'
import {NavLink} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';


class Navbar extends React.Component{

  componentDidMount=()=>{
    let sidenav = document.querySelector('#mobile-demo');
    M.Sidenav.init(sidenav, {});
  }

  render(){
    return(
      <header>
        <div>
          <nav style={{position:'fixed',zIndex:'1'}} className="blue-grey darken-3">
            <div className="nav-wrapper">
              <div className="brand-logo">
            <NavLink to="/">
              Chijindu
            </NavLink>
            </div>
  
            <a href="gfggg" data-target="mobile-demo" className="button-collapse sidenav-trigger"><i className="material-icons">menu</i></a>
  
            <ul id="nav-mobile" className="right hide-on-med-and-down">
  
              <li>
            <NavLink to="/">
              Home
            </NavLink>
            </li>
  
              <li>
            <NavLink to="/projects">
              Projects
            </NavLink>
            </li>
  
            <li>
            <NavLink to="/blog">
              Blog
            </NavLink>
            </li>
  
            <li>
            <NavLink to="/about">
              About
            </NavLink>
            </li>
            </ul>
            </div>
          </nav>
  
          <ul className="sidenav blue-grey darken-3" id="mobile-demo">
          <li>
            <NavLink to="/">
              Home
            </NavLink>
            </li>

      <li><NavLink to="/portfolio">
              Portfolio
            </NavLink></li>
      <li><NavLink to="/blog">
              Blog
            </NavLink></li>
      <li><NavLink to="/about">
              About
            </NavLink></li>
      
    </ul>
        </div>
      </header>
    )
  
  }

  }

export default Navbar
