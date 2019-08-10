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

class ProveedoresTelefoniaFija extends React.Component {
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
          Seleccione su proveedor de <u>Telefonía fija</u>
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={24}>
            <Card className={classes.card}
              onClick={this.goToForm}
            >
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
            <Card className={classes.card}
              onClick={this.goToForm}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="telefonia-fija.png"
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
                  image="telefonia-fija.png"
                  title="Megacable"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Megacable
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
                  image="telmex.png"
                  title="Telmex"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Telmex
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
                  image="totalplay.png"
                  title="Totalplay"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Totalplay
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

export default withStyles(styles)(ProveedoresTelefoniaFija);
