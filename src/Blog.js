import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import sanityClient from './client.js'
import './Blog.css'

class Blog extends React.Component{
 
  state={postData: null}

  

  componentDidMount=()=>{
    sanityClient.fetch(`*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`)
    .then((data)=>[this.setState({postData:data})
    ])
    .catch(console.error)
    
  }
 
 
  render(){
    // console.log(this.state.postData)
    return(<main id="blogBackground">
        <div>
        <Navbar/>
        </div>
        <br/>
        <br/>

        <div  className="font1  center-align">
          <h2 style={{color:'#DCD6F7'}}>Chijindu's Blog</h2>
          <h4 style={{color:'#DCD6F7'}}>Welcome to my blog page...</h4>
        </div>

        <br/>

        <div className="row" style={{backgroundColor:'#4e4c67'}}>
          

        {this.state.postData && this.state.postData.map((post,index)=>(
          <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
          <div key={index} className="col s12 m6 l4" style={{marginBottom:'100px'}}>
          <div style={{borderRadius:'30px'}} className="card small">
          <div  className="card-image waves-effect waves-block waves-light">
            <img style={{borderRadius:'30px'}}  className="activator" src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{post.title}<i className="material-icons right">arrow_forward</i></span>
           
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
            <p>If you're reading this,my Blog Post is down! Send Welp!!</p>
          </div>
        </div>
        </div>
        </Link>
        
        ))}
      
 
      </div>
      <div id="backgroundColor2" className="center-align"><h6>N.B: I typically made this blog section in my portfolio as a space for non-tech & non-medical musings. Click <span><a href="https://dev.to/cnwak" target="_blank" rel="noreferrer">here</a></span> to access my DEV blog posts</h6></div>   
        
        <br/>
        </main>
    )
  }
  
}

export default Blog
