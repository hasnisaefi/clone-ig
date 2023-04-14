import React from 'react';
import { Fragment } from 'react';
import './App.css';
// import LoginPage from './Component/LoginPage/LoginPage';
import Home from './Component/HomePage/Home'

function App() {
  return (
    <Fragment>
      <div className="App">
        {/* <LoginPage/> */}
        <Home/>
      </div>
    </Fragment>
  );
}

export default App;
