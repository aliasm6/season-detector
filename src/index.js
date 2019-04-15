import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // same as using constructor method
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude })
      ,
      err => this.setState({ errorMessage: err.message})

    );
  }

  componentDidUpdate() {
    console.log('Component was updated!');
  }
  //helper method to avoid using conditionals within render
  renderContent() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.ErrorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Please accept location request." />;
  }
  //React requires that render be defined!!!
  //Avoid conditional rendering
  render () {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
