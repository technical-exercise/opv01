import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './Checkout';

class Mui extends React.Component {
  render() {
    return (
      <div>
        <Checkout />
      </div>
    );
  }
}

ReactDOM.render(<Mui />, document.getElementById('root'));
