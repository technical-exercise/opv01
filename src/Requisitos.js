import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class Requisitos extends React.Component {
  state = {
    gilad: true,
    jason: true,
    antoine: true,
    text: true,
    subscriber: true,
    other: true,
    mobile: true,
    logs: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { gilad, jason, antoine, text, subscriber, other, mobile, logs } = this.state;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">El interesado ha presentado los siguientes documentos:</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad" />
              }
              label="Identificación"
            />
            <FormControlLabel
              control={
                <Checkbox checked={jason} onChange={this.handleChange('jason')} value="jason" />
              }
              label="Domicilio"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={this.handleChange('antoine')}
                  value="antoine"
                />
              }
              label="Teléfono"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={text}
                  onChange={this.handleChange('text')}
                  value="text"
                />
              }
              label="Testigos"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={subscriber}
                  onChange={this.handleChange('subscriber')}
                  value="subscriber"
                />
              }
              label="Firma"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={other}
                  onChange={this.handleChange('other')}
                  value="other"
                />
              }
              label="CURP"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={mobile}
                  onChange={this.handleChange('mobile')}
                  value="mobile"
                />
              }
              label="RFC"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={logs}
                  onChange={this.handleChange('logs')}
                  value="logs"
                />
              }
              label="Número de seguridad social"
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  }
}

Requisitos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Requisitos);
