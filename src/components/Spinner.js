// import React, { Component } from 'react'
import React  from 'react'


import loading from'./loading.gif'

// export default class Spinner extends Component 
const Spinner =()=>
{
  // render() {
    return (
      <div>
        <div className="container text-center">
    
        <img className='my-3' src={loading} alt="loading" />
      </div>
      </div>
    )
  }
// }
export default Spinner
