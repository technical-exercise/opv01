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

class ProveedoresTelefoniaMovil extends React.Component {
  constructor(props) {
    super(props);
    this.goToForm = this.goToForm.bind(this);
  }
  goToForm() {
    this.props.goToForm();
  }
  render() {
    const classes = this.props.classes;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Seleccione su proveedor de <u>Telefonía móvil</u>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={24}>
            <Card className={classes.card}
              onClick={this.goToForm}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="mobile.png"
                  title="Maxcom"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Maxcom
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.card}
              onClick={this.goToForm}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="att.png"
                  title="AT&T"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    AT&T
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.card}
              onClick={this.goToForm}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="weex.png"
                  title="Weex"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Weex
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.card}
              onClick={this.goToForm}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="mobile.png"
                  title="QBOcel"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    QBOcel
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.card}
              onClick={this.goToForm}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="telcel.png"
                  title="TelCel"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    TelCel
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.card}
              onClick={this.goToForm}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="telefonica.png"
                  title="Telefónica"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Telefónica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.card}
              onClick={this.goToForm}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="virgin.png"
                  title="Virgin Mobile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Virgin Mobile
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

export default withStyles(styles)(ProveedoresTelefoniaMovil);
