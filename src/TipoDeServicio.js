import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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

class TipoDeServicio extends React.Component {

  constructor(props) {
    super(props);
    this.telefoniaFija = this.telefoniaFija.bind(this);
    this.bandaAnchaFija = this.bandaAnchaFija.bind(this);
    this.tv = this.tv.bind(this);
  }

  bandaAnchaFija() {
    this.props.bandaAnchaFija();
  }

  telefoniaFija() {
    this.props.telefoniaFija();
  }

  tv() {
    this.props.tv();
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Seleccione el tipo de servicio
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={24}>
            <Card className={classes.card}
              onClick={this.telefoniaFija}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="telefonia-fija.png"
                  title="Telefonía fija"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Telefonía fija
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              className={classes.card}
              onClick={this.bandaAnchaFija}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="broadband.png"
                  title="Broadband"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Banda ancha fija
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.card}
              onClick={this.tv}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="tv.png"
                  title="TV"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Televisión restringida
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="mobile.png"
                  title="Mobile"
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
                  image="satellite-dish.png"
                  title="Banda Ancha Móvil"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Banda ancha móvil
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

TipoDeServicio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TipoDeServicio);
