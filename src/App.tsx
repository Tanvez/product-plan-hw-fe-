import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { RoadMap } from './containers/RoadMap'


const App = () => (
    <>
      <NavBar/>
      <div className="App" style={{display:'flex'}}>
        <RoadMap />
      </div>
    </>
)

export default App;
