import React from 'react'
import materializeLogo from './img/materializeLogo.svg'
import sanityLogo from './img/sanityLogo.svg'


const Stack =()=>{
  return(  
  <div className="" style={{paddingTop:'100px',paddingBottom:'100px'}}>

    
  <div className="row">
  <div className="col s4"><img src="https://img.icons8.com/ios-filled/70/000000/html-5.png" alt="html"/><p style={{display:'block'}}>HTML 5</p></div>

  <div className="col s4"><img src="https://img.icons8.com/ios-filled/70/000000/css3.png" alt="css"/><p style={{display:'block'}}>CSS 3</p></div>

  <div className="col s4"><img src="https://img.icons8.com/ios-filled/70/000000/javascript.png" alt="Js"/><p style={{display:'block'}}>Javascript</p></div>
  
</div>


<div className="grey darken-2" style={{height:'50px',width:'100%'}}></div>

  <div className="row">
  <div className="col s4"><img src="https://img.icons8.com/ios-filled/70/000000/react-native.png" alt="JS"/><p style={{display:'block'}}>React</p></div>

  <div className="col s4"><img src="https://img.icons8.com/ios-filled/70/000000/github.png" alt="Version Control"/><p style={{display:'block'}}>Git and Version Control</p></div>

  <div className="col s4"><img src="https://img.icons8.com/ios-filled/70/000000/redux.png" alt="redux"/><p style={{display:'block'}}>Redux</p></div>

</div>

<div className="grey darken-2" style={{height:'50px',width:'100%'}}></div>


<div className="row">
  <div className="black-text col s4"><img src={materializeLogo} height="80px" alt="Materialize"/><p style={{display:'block'}}>Materialize CSS</p></div>

  <div style={{marginTop:'45px'}} className="black-text col s4"><img src={sanityLogo} height="30px" alt="Sanity"/><p style={{display:'block'}}>Sanity.io</p></div>

</div>

</div>)
}

export default Stack