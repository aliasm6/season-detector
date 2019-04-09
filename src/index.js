import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  //special named function particular to JS language not specifc to React
  //very first function that is called any time an instance of a class is created

  constructor(props) {
    //this ensures that React.Component's constructor function is called upon when the App class is created. Otherwise the App class will overwrite the class that it extends upon's constructor. Super is reference to parent's constructor function.
    super(props);

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude })
      },
      err => console.log(err)
    );
  }
  //React requires that render be defined!!!
  render () {

    return <div> Latitude: {this.state.lat} </div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
