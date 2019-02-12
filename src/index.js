import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './Checkout';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class Mui extends React.Component {
  render() {
    return (
      <div>
<MuiThemeProvider theme={theme}>
        <Checkout />
</MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render(<Mui />, document.getElementById('root'));
