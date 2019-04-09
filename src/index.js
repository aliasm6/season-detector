import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  //special named function particular to JS language not specifc to React
  //very first function that is called any time an instance of a class is created

  constructor(props) {
    //this ensures that React.Component's constructor function is called upon when the App class is created. Otherwise the App class will overwrite the class that it extends upon's constructor. Super is reference to parent's constructor function.
    super(props);
    //ONLY place where setState function isn't needed.
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //Used setState function to reasign state!!!!!!
        this.setState({ lat: position.coords.latitude })
      },
      err => {
        this.setState({ errorMessage: err.message})
      }
    );
  }

  componentDidMount() {
    console.log('Component rendered to the screen!');
  }

  componentDidUpdate() {
    console.log('Component was updated!');
  }
  //React requires that render be defined!!!
  //Conditional rendering
  render () {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.ErrorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div> Loading </div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
