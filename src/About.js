import React from 'react'
import Navbar from './Navbar'
import Stack from './Stack'
import './About.css'


const About=()=>{
  return(
    
    <div id="aboutBackground">
      <Navbar/>
      <br/>
      <br/>

      <section className="valign-wrapper">
          <div  className="center-align" >

<div className="container">
        <div className=" row ">
          <div className="col s12 ">
          <div
          id="parallel"
          style={{zIndex:''}}
          className="card responsive-img blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">About Me</span>
          <h6>I started my coding journey around May of 2020 and I haven't looked back since. I'm conversant with basic frontend languages & frameworks, JavaScript and React JS. My plan is to soon fully migrate into Backend development by 2021 (so if you're reading this,it might be too late).</h6>
          
          <h6>
            I am eager to learn new things and have a lot of a 'can do' attitude. Javascript logic and manipulation interests me. I'm also a trained  medic and have a soft spot for the health tech space.  <a href="#strive">Check out what I strive to achieve</a> with each project and my <a href="#stack">code stack</a>. 
          </h6>
        </div>
      </div>
          </div>
          </div>
        </div>
          
          </div>
          </section>
      
      <div id="strive" className="" style={{marginTop:'-42px'}}>
      
      <div  className="row">

      
      <div className="col s4">
      <div class="center promo promo-example">
                <i className="material-icons large">computer</i>
                <p className="promo-caption">User Interface/ Experience Focused</p>
                <p className=" light center">By using standard ES6 JavaScript and modern HTML/CSS (+ frameworks), I strive to deliver top of the line UI/UX to users for the best of project experiences.</p>
              </div>
              </div>
      <div className="col s4">
      <div class="center promo promo-example">
                <i className="material-icons large">group</i>
                <p className="promo-caption">A Team Player</p>
                <p className="light center">I strive for top of the line, all hands on deck team collaboration, bringing my full attention, focus and commitment to group projects</p>
              </div>
              </div>
      <div className="col s4">
      <div class="center promo promo-example">
                <i className="material-icons large">build</i>
                <p className="promo-caption">Uses Clean Reusable Code</p>
                <p className="light center">Meticulous, careful and precise code is a strong point for my works. Code readability to the point of reusability is a  goal I try to achieve in my projects.</p>
              </div>
              </div>
              </div>

      </div>
      
<div id="stack" className="grey darken-2 center-align ">
 <Stack/></div>
      </div>
  )
}

export default About
