import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { TimeLineContainer } from './containers/Timeline';

const App = () => (
    <>
      <NavBar/>
      <div className="App" style={{display:'flex'}}>
        <TimeLineContainer />
      </div>
    </>
)

export default App;
