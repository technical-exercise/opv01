import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ProveedoresTelefoniaFija from './ProveedoresTelefoniaFija';
import ProveedoresBandaAnchaFija from './ProveedoresBandaAnchaFija';
import ProveedoresTv from './ProveedoresTv';
import ProveedoresTelefoniaMovil from './ProveedoresTelefoniaMovil';

const styles = {
  card: {
    maxWidth: 1000,
  },
  media: {
    height: 200,
  },
};

class Providers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const typeOfService = this.props.typeOfService;
    let providers_component;
    if (typeOfService === 'telefonia_fija') {
      providers_component = <ProveedoresTelefoniaFija />;
    } else if (typeOfService === 'banda_ancha_fija') {
      providers_component = <ProveedoresBandaAnchaFija />;
    } else if (typeOfService === 'tv') {
      providers_component = <ProveedoresTv />;
    } else if (typeOfService === 'telefonia_movil') {
      providers_component = <ProveedoresTelefoniaMovil />;
    }
    return (
      <div>
        {providers_component}
      </div>
    );
  }
}

export default withStyles(styles)(Providers);
