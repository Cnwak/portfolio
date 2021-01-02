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
          <nav style={{color:'#985F6F',opacity:'0.7', position:'fixed',zIndex:'1'}} className="">
            <div className="nav-wrapper">
              <div className="brand-logo font1">
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
  
          <ul style={{backgroundColor:'#985F6F'}} className="sidenav " id="mobile-demo">
          <li>
            <NavLink to="/">
              Home
            </NavLink>
            </li>

      <li><NavLink to="/projects">
              Projects
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
