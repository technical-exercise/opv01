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
    maxWidth: 1000,
  },
  media: {
    height: 200,
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
          image="satellite-dish-solid.svg.png"
          title="Satellite"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ARCO - Acceso
          </Typography>
          <Typography component="p">
            Acceso, Rectificación, Cancelación, Oposición
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
            ARCO - Rectificación
          </Typography>
          <Typography component="p">
            Acceso, Rectificación, Cancelación, Oposición
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="heart.png"
          title="Heart"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ARCO - Cancelación
          </Typography>
          <Typography component="p">
            Acceso, Rectificación, Cancelación, Oposición
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
            ARCO - Oposición
          </Typography>
          <Typography component="p">
            Acceso, Rectificación, Cancelación, Oposición
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
