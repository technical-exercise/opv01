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

class AddressForm extends React.Component {

  constructor(props) {
  super(props);
  }
  render() {
    const { classes } = this.props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Selecciona el servicio
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={24}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="telcel.png"
          title="Telcel"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Telefonía fija
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="movistar.png"
          title="Movistar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Banda Ancha Fija
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
            Televisión Restringida
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
            Telefonía movil
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
            Banda Ancha Móvil
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
  }
}

AddressForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddressForm);
