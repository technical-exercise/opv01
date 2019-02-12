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

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function PaymentForm(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select your service provider
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={24}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="amazon-brands.svg.png"
          title="Amazon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Amazon
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
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withStyles(styles)(PaymentForm);
