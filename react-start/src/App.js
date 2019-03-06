import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            吴俊杰的第一个react小项目
          </p>
          <a
            className="App-link"
            href="https://wujunjie.xin"
            target="_blank"
            rel="noopener noreferrer"
          >
            吴俊杰的个人博客
          </a>
        </header>
      </div>
    );
  }
}

export default App;
