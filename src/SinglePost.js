import React, {useEffect,useState} from 'react'
import sanityClient from './client'
import {useParams} from 'react-router-dom'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Navbar from './Navbar'
import './singlePost.css'

const builder = imageUrlBuilder(sanityClient)
  function urlFor(source){
    return builder.image(source)
  }

  
const SinglePost=()=> {
  const [singlePost,setSinglePost] = useState(null)
  const {slug}= useParams();

  

  useEffect(()=>{
    sanityClient.fetch(`*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`).then((data)=>[console.log(data[0]),
      setSinglePost(data[0])])
      
    .catch(console.error)
  },[slug]);
    

  
    
  if(!singlePost){
    return <div style={{height:'',display:'none'}}>Loading...</div>
  }else{
  return(<div id="mainDiv">
    <Navbar/>
    
    <main id="singleBack"
     style={{backgroundImage: `url(${singlePost.mainImage.asset.url})`}}
     >
       <br/>
       <br/>
       <br/>
      <article className="white container center-align">
        <div className="row">
          <div className="col s10">
          <header>
          <h1>{singlePost.title}</h1>
        </header>
          </div>
        </div>

        <div className="row container">
          <div className="container col s4">
              <div style={{display:'flex'}} className="container">
              <img  className="circle responsive-img" height="65px" width="90px" src={urlFor(singlePost.authorImage).url()}
              alt={singlePost.name}/>

              <h5 style={{marginLeft:'15px'}}  className="">{singlePost.name}</h5>
              </div>
          </div>
        </div>
        
          <br/>
          
          <div className="container">

          
          
          </div>

          <br/>
          <br/>
          <br/>
          <br/>

          <div className="container">
          <img id="image" className="responsive-img" src={singlePost.mainImage.asset.url} alt={singlePost.title}
          style={{height:''}}/>
          </div>
          
        

        <br/>
        <div><BlockContent blocks={singlePost.body} projectId="pmcvrr06" dataset="production"/> </div>

        <br/>
        <br/>
      </article>
      <br/>
      <br/>
      <br/>
       <br/>
    </main>
    </div>
  )
  }
}

  
  

  
  

  
    
    
  



  


export default SinglePost