import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function AddressForm(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Request information from
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={24}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="heart.png"
          title="Heart"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Dating Applications
          </Typography>
          <Typography component="p">
            Your personality traits, sexual preferences, dating history, and other lifestyle information.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="swimmer-solid.svg.png"
          title="Swimmer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Fitness Trackers
          </Typography>
          <Typography component="p">
            Your heartbeat, sleeping patterns, diet, weight, walking habits, and general health.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="satellite-dish-solid.svg.png"
          title="Satellite"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Telecommunications
          </Typography>
          <Typography component="p">
            Your phone call records, web browsing history, geolocation, and device identifiers.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

AddressForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddressForm);
