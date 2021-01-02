import React from 'react'
import Loading from './LoadingScreen'
import Navbar from './Navbar'
import './Home.css'



class Home extends React.Component{
  
  state= {loading: undefined}

componentDidMount(){



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
        <div className="lines">
  <div className="line"></div>
  <div className="line"></div>
  <div className="line"></div>
</div>

         <section className="valign-wrapper">
          <div id="center" className="center-align" 
          >


       
            <h2 className="animate__animated animate__fadeInDown ">Hi, I'm Chijindu</h2>
            
            
            <h4  className="animate__animated animate__fadeInLeft font1">a frontend </h4> <h3 className="  animate__animated animate__fadeInRight">developer...</h3>

            
            
       
        </div>

     
        

      </section>

      <div className="center-align">
        <div className="row">
          <div className="col s6 l3 m3">
            <a href="https://github.com/Cnwak" target="_blank" rel="noreferrer"><h5>Github</h5></a>
          </div>
          <div className="col s6 l3 m3">
            <a href="https://twitter.com/CNwaks" target="_blank" rel="noreferrer"><h5>Twitter</h5></a>
          </div>
          <br/>
          <br/>
          <div className="col s6 l3 m3">
            <a href="https://codepen.io/cnwaks" target="_blank" rel="noreferrer"><h5>CodePen</h5></a>
          </div>
          <div className="col s6 l3 m3">
            <a href="https://stackoverflow.com/users/14422646/chijindu" target="_blank" rel="noreferrer"><h5>Stack Overflow</h5></a>
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
