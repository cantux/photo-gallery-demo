import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoGallery from "./components/PhotoGallery";

// import {PhotoGalleryWithSwipe} from "./components/PhotoGalleryWithSwipe";

const imgCaptionsArray = require('./images.json');

class App extends Component {
  render() {
    // const PhotoGallery = PhotoGalleryWithSwipe();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <PhotoGallery imgCapArray={imgCaptionsArray}/>
      </div>
    );
  }
}

export default App;
