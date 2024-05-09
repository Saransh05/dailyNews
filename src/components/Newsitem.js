// import React, { Component } from 'react'
import React from 'react'

// export default class Newsitem extends Component 
 const Newsitem=(props)=>
 {
  
  // render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=props

    return (
      <div>
        <div className="card" >
  <img src= {!imageUrl?"https://images.moneycontrol.com/static-mcnews/2022/10/deal-770x433.jpg": imageUrl} className="card-img-top" alt="..."/>
  {/* means that if image is null then show link image lese show imageurl for the respetive */}
  <div className="card-body">
    <h5 className="card-title">{title}, <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" style={{left:'50$',zIndex:'1'}}>{source}
  
  </span>
</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>

    <a rel="noreferrer" href={newsUrl}   target="-blank"  className= "btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
// }
export default Newsitem
// shortcut-exp

