import * as React from 'react'
import Banner from './Banner.jsx'
import Graine from './Graine.jsx'
import Jardin from './jardin.jsx'
import "../styles/index.css"

function App() {
  return (
    <React.Fragment>
      <Banner />
      <div className="global">
        <div className="div-graine"> <Graine /> </div>
        <div className="div-jardin"> <Jardin /> </div>
      </div>
    </React.Fragment>
    )
}

export default App;
