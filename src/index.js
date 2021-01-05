import {BrowserRouter,Route,Switch} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import Portfolio from './Portfolio'
import About from './About'
import SinglePost from './SinglePost'
import Blog from './Blog'
import Home from './Home'



const BackHome =()=>{
  <div>
    <h3>GET BACK HOME!</h3>
  </div>
}


class App extends React.Component{



  render(){
    

      return(

        
      <BrowserRouter>
      
      <Switch>
        <Route component={Home} path='/' exact/>

        <Route component={About} path='/about'/>

        <Route component={Portfolio} path='/projects'/>
        
        <Route component={SinglePost} path='/blog/:slug'/>

        <Route component={Blog} path='/blog' />

        <Route component={BackHome}/>
      </Switch>
        </BrowserRouter>
        
        )
    

  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);