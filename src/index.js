import React from 'react';
import ReactDOM from 'react-dom';
import Opv from './Opv';
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
          <Opv />
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render(<Mui />, document.getElementById('root'));
