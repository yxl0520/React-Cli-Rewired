import React from 'react';
// import logo from './logo.svg';
// import Pic from './picRecognise'
import CssModuleDemo from './pages/cssModuleDemo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p className="title">—— 路由 ——</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Pic /> */}
      <CssModuleDemo />
    </div>
  );
}

export default App;
