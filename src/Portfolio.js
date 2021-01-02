import React from 'react'
import Navbar from './Navbar'
import mockup1 from './img/mockups/mockup1.png'
import mockup2 from './img/mockups/mockup2.png'
import mockup3 from './img/mockups/mockup3.png'
import mockup4 from './img/mockups/mockup4.png'
import mockup5 from './img/mockups/mockup5.png'

const Portfolio=()=>{
  return(
    <div  style={{width:'100%',backgroundColor:'#DCD6F7'}}>
      <Navbar/>
      <br/>
      <br/>
      <div className="center-align">
      <h1 className="font1">Projects</h1>
      </div>
      <br/>

        <div className="center-align">
        <div  className="row">
        <div style={{marginTop:'35px'}} className="col s12 m6">
          <h3>Youtube Video Finder</h3>
          <h5>The app was created to fetch and display top video searches of highest query significance using Youtube's search engine</h5>
          <p><em><u>Created using: React JS, Materialize CSS, Axios & Youtube's API</u></em></p>
          <br/>
          <a href="https://youtube-video-finder.netlify.app/" target="_blank" rel="noreferrer"><p>View Site <span><i class="fa fa-link fa-lg" aria-hidden="true"></i></span></p></a>
          
          <div style={{height:'50px'}}></div>
        </div>
        <br/>
        <br/>
        {/* BREAK */}
        <div className="col s12 m6">
          <img src={mockup1} alt="mockup1" height="250px"/>
        </div>
      </div>
      <br/>
      <hr/>
      <br/>



        <div  className="row">
        <div style={{marginTop:'35px'}} className="col s12 m6">
          <h3>Gestaional Age & Estd. Delivery Date Calc.</h3>
          <h5>An EDD & GA calculator to ease the cumbersome calculation of an estimated delivery date for both Medical practitioners and patients</h5>
          <p><em><u>Created using: HTML, Vanilla JavaScript & Materialize CSS</u></em></p>
          <br/>
          <a href="https://eddgestationalagecalaculator.netlify.app/" target="_blank" rel="noreferrer" ><p>View Site <span><i class="fa fa-link fa-lg" aria-hidden="true"></i></span></p></a>
          <div style={{height:'50px'}}></div>
        </div>
        <br/>
        <br/>
        {/* BREAK */}
        <div className="col s12 m6">
          <img src={mockup2} alt="mockup2" height="250px"/>
        </div>
      </div>
      <br/>
      <hr/>
      <br/>



        <div  className="row">
        <div style={{marginTop:'35px'}} className="col s12 m6">
          <h3>Image Finder</h3>
          <h5>An image query app that returns images searched for. Used for easy downloads with it's eye pleasing, tile-packed display</h5>
          <p><em><u>Created using: React JS, Materialize CSS, Axios & Unsplash's API</u></em></p>
          <br/>
          <a href="https://cnwak-image-finder.netlify.app/" target="_blank" rel="noreferrer"><p>View Site <span><i class="fa fa-link fa-lg" aria-hidden="true"></i></span></p></a>
          <div style={{height:'50px'}}></div>
        </div>
        <br/>
        <br/>
        {/* BREAK */}
        <div className="col s12 m6">
          <img src={mockup3} alt="mockup3" height="250px"/>
        </div>
      </div>
      <br/>
      <hr/>
      <br/>



        <div  className="row">
        <div style={{marginTop:'35px'}} className="col s12 m6">
          <h3>The House Officer's List</h3>
          <h5>A CRUD App that can be used by hospital interns to keep quick and easy information on patients. It's backed up to your device's local storage so data inputted always remains, unless deleted.</h5>
          <p><em><u>Created using:HTML, Vanilla JavaScript & Materialize CSS</u></em></p>
          <br/>
          <a href="https://the-ho-list.netlify.app/" target="_blank" rel="noreferrer"><p>View Site <span><i class="fa fa-link fa-lg" aria-hidden="true"></i></span></p></a>
          <div style={{height:'50px'}}></div>
        </div>
        <br/>
        <br/>
        {/* BREAK */}
        <div className="col s12 m6">
          <img src={mockup4} alt="mockup3" height="250px"/>
        </div>
      </div>
      <br/>
      <hr/>
      <br/>



      <div  className="row">
        <div style={{marginTop:'35px'}} className="col s12 m6">
          <h3>The Weather Forecast App & The Weather Geolocator App</h3>
          <h5>The first is a weather app that forecasts 5 days worth of weather information. The second app uses your devices geolocation to automatically give you an update of the weather at your location.</h5>
          <p><em><u>Created using:HTML, Vanilla JavaScript, Materialize CSS, Google's Geolocator API & OpenWeather's API</u></em></p>
          <br/>
          <a href="https://city-weather-forecaster.netlify.app/" target="_blank" rel="noreferrer"><p>View Site 1 <span><i class="fa fa-link fa-lg" aria-hidden="true"></i></span></p></a>
          <a href="https://weather-coordinate-app.netlify.app/" target="_blank" rel="noreferrer"><p>View Site 2 <span><i class="fa fa-link fa-lg" aria-hidden="true"></i></span></p></a>
          <div style={{height:'50px'}}></div>
        </div>
        <br/>
        <br/>
        {/* BREAK */}
        <div className="col s12 m6">
          <img src={mockup5} alt="mockup3" height="250px"/>
        </div>
      </div>

      </div>
        
      </div>
      
  )
}

export default Portfolio
