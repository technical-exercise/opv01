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

class Review extends React.Component {
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
          <FormLabel component="legend">Data requested from Bell</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad" />
              }
              label="Geolocation data collected about me, my devices, and/or associated with my account (e.g. GPS information, cell tower information)"
            />
            <FormControlLabel
              control={
                <Checkbox checked={jason} onChange={this.handleChange('jason')} value="jason" />
              }
              label="IP address logs associated with me, my devices, and/or my account (e.g. IP addresses assigned to my devices/router, IP addresses or domain names of sites I visit and the times, dates, and port numbers)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={this.handleChange('antoine')}
                  value="antoine"
                />
              }
              label="Disclosures to third parties Any information about disclosures of my personal information, or information about my account or devices, to other parties, including law enforcement and other state agencies "
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={text}
                  onChange={this.handleChange('text')}
                  value="text"
                />
              }
              label="Text & multimedia messages (sent and received, including date, time, and recipient information) "
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={subscriber}
                  onChange={this.handleChange('subscriber')}
                  value="subscriber"
                />
              }
              label="Subscriber information that you store about me, my devices, and/or my account"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={other}
                  onChange={this.handleChange('other')}
                  value="other"
                />
              }
              label="Other Any additional kinds of information that you have collected, retained, or derived from the telecommunications services or devices that I, or someone associated with my account, have transmitted or received using your company’s services "
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={mobile}
                  onChange={this.handleChange('mobile')}
                  value="mobile"
                />
              }
              label="Mobile app data Information collected about me, or persons/devices associated with my account, using one of your company’s mobile device applications "
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={logs}
                  onChange={this.handleChange('logs')}
                  value="logs"
                />
              }
              label="Call logs E.g. numbers dialed, times and dates of calls, call durations, routing information, and any geolocational or cellular tower information associated with the calls) "
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  }
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);
