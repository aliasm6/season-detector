import React from 'react';

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

//more elegant way to use altnerate props in the event that a prop isn't passed to the component as opposed to using or statement on line 6 above.
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
