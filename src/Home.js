import React from 'react'
import Loading from './LoadingScreen'
import Navbar from './Navbar'
import './Home.css'



class Home extends React.Component{
  
  state= {loading: undefined}

componentDidMount(){

  console.log('Hi');

  setTimeout(()=>{this.setState({loading:true})},6000)
    
}

  
  render(){
    if(!this.state.loading){
      return(
      <div ><Loading/>
      </div>
      )
    }else{
    return(
      
      <div  >
        <Navbar/>
        <div id="back">
         <section className="valign-wrapper">
          <div id="center" className="center-align" 
          >


       
            <h1 className="animate__animated animate__fadeInDown">Hi, I'm Chijindu</h1>
            
            
            <h3  className="animate__animated animate__fadeInLeft">a frontend </h3> <h3 className="  animate__animated animate__fadeInRight">developer...</h3>

            
            
       
        </div>

     
        

      </section>

      <div className="center-align">
        <div className="row">
          <div className="col s6 l3 m3">
            <h5>Github</h5>
          </div>
          <div className="col s6 l3 m3">
            <h5>Twitter</h5>
          </div>
          <div className="col s6 l3 m3">
            <h5>CodePen</h5>
          </div>
          <div className="col s6 l3 m3">
            <h5>Stack Overflow</h5>
          </div>
        </div>
      </div>

      </div>

      

      
        
        </div>
        

        
        
    )

    }
  }
}

export default Home
