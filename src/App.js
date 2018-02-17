import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'a962791b49c949499dabca42539b64bd'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 800 
      }
    }
    
  }
};
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    console.log('Click!');
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
    }
  );
  }
  render() {
    return (
      <div className="App">
        <Particles className="particles"
                params={particlesOptions}
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition input={this.state.input} />
      </div>

    );
  }
}

export default App;
