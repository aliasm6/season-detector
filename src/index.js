import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    ),

    <div> Sanity Check </div>
  )
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
