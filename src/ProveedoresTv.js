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

function ProveedoresTv(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Seleccione su proveedor de <u>Televisión restringida</u>
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={24}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="izzi.png"
                title="izzi"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  izzi
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="dish.png"
                title="Dish"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Dish
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="tv.png"
                title="Maxcom"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Maxcom
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="tv.png"
                title="Megacable"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Megacable
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="tv.png"
                title="MVS"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  MVS
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="tv.png"
                title="Bluetelecomm"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Bluetelecomm
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="tv.png"
                title="TV Rey"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  TV Rey
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withStyles(styles)(ProveedoresTv);
