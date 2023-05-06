import React from 'react'
import Head from './Component/Head/Head'
import "./App.css"
import Aaaa from './Component/Aaaa/Aaaa'
function App() {
 
    const myStyle={
        
         height:'100%',
    
     
     };
  return (
    <div className='back_main'style={myStyle} >
      <div className='back'>
      {/* <Head/>
      <Total_value/> */}
      <Aaaa/>
    </div>
    </div>
  )
}

export default App
