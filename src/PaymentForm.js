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
    maxWidth: 1000,
  },
  media: {
    height: 200,
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
          image="telcel.png"
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
          image="android-brands.svg.png"
          title="Android"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Android
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="apple-brands.svg.png"
          title="Apple"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Apple
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="bluetooth-brands.svg.png"
          title="Bluetooth"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bluetooth
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="chrome-brands.svg.png"
          title="Chrome"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Chrome
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="ebay-brands.svg.png"
          title="Ebay"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ebay
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="firefox-brands.svg.png"
          title="FireFox"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Firefox
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="github-brands.svg.png"
          title="Github"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Github
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="google-drive-brands.svg.png"
          title="Google Drive"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Google Drive
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="gulp-brands.svg.png"
          title="Gulp"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Gulp
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
