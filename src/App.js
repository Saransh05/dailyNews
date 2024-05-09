import './App.css';

// import React, { Component } from 'react';

import React, { useState} from 'react';

import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";
 
import Nomatchroute from './components/Nomatchroute';


// export default class App extends Component 
const App=()=>
{
   const pageSize=4
  // apiKey=process.env.REACT_APP_NEWS_API
//   state={
//     progress:0
//    }

//  setProgress=(progress)=>{

//     this.setState({ progress: progress})
    
//    }
const[progress,setProgress]=useState(0);

  


  // render()
  //  {

    return (

      <div>
      <BrowserRouter>
      <Navbar/>

      <LoadingBar
      height={4}
        color='#f11946'
        // progress={this.state.progress}
        progress={progress}

        
        
        
      />


         <Routes>
          <Route path="/" element={   <News   
           setProgress={setProgress}

          key="general" pageSize={pageSize} country="us" category="general"/>} />


          < Route path="/business" element={   <News  setProgress={setProgress}
          key="business"pageSize={pageSize} country="us" category="business"/>} />

          <Route
           path="/sports" element={   <News  setProgress={setProgress}key="sports"pageSizegeSize={pageSize} country="us" category="sports"/>} />

          <Route path="/general" element={   <News  setProgress={setProgress} key="general"pageSize={pageSize} country="us" category="general"/>} />


          <Route path="/science" element={   <News   setProgress={setProgress} key="science"pageSize={pageSize} country="us" category="science"/>}/>


          <Route path="/technology" element={   <News   setProgress={setProgress}key="technology" pageSize={pageSize} country="us" category="technology"/>}/>


          <Route path="/health" element={   <News  setProgress={setProgress} key="health"pageSize={pageSize} country="us" category="health"/>} />


          <Route path="*" element={<Nomatchroute/>}></Route>

       </Routes>
     </BrowserRouter>
      


    {/* <News/> */}
    {/*  above /* will show default proops set */}
      </div>
    ) 
  // }
}
export default App
