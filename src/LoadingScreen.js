import React from 'react'
import './LoadingScreen.css'


const Loading =()=>{
  return(

    <div className="loading valign-wrapper" style={{height: '100vh',width:'100vw',overflow:'hidden',position:'absolute',top:'0',bottom:'0'}}>
      <div className="center-align" style={{width:'100vw'}}>
       
       {/* START */}
      <div className="containers">
    <div className="box">

        <div className="title">
            <span className="block"></span>
            <h1>Chijindu N <span></span> </h1>
        </div>
        <br/>

        <div className="role">
            <div className="block"></div>
            <p>Software Developer</p>
        </div>

    </div>
</div>

{/* END */}

      </div>
      </div>
      
  )
}


export default Loading