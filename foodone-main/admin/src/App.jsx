import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Sidebar from './Components/sidebar/sidebar'


const App = () => {
  return (
    <div>
      
      <Navbar></Navbar>
      <hr/>
      <div className="app-content">
        <Sidebar/>
      </div>

    </div>
  )
}

export default App