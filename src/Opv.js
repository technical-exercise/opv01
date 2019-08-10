import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TipoDeServicio from './TipoDeServicio';
import Providers from './Providers';
import ProveedoresBandaAnchaFija from './ProveedoresBandaAnchaFija';
import Access from './Access';
import Form from './Form';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Tipo de Servicio', 'Proveedor', 'Formulario', 'Acceso'];

class Opv extends React.Component {
  state = {
    activeStep: 0,
    provider: '',
  };

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <TipoDeServicio
                 telefoniaFija={this.telefoniaFija}
                 bandaAnchaFija={this.bandaAnchaFija}
                 tv={this.tv}
                 telefoniaMovil={this.telefoniaMovil}
                 bandaAnchaMovil={this.bandaAnchaMovil}
               />;
      case 1:
        return <Providers
                 typeOfService={this.state.typeOfService}
                 goToForm={this.goToForm}
               />;
      case 2:
        return <Form />;
      case 3:
        return <Access />;
      default:
        throw new Error('Unknown step');
    }
  };

  telefoniaFija = () => {
    this.setState({activeStep: 1, typeOfService: 'telefonia_fija'});
  }

  bandaAnchaFija = () => {
    this.setState({activeStep: 1, typeOfService: 'banda_ancha_fija'});
  }

  tv = () => {
    this.setState({activeStep: 1, typeOfService: 'tv'});
  }

  telefoniaMovil = () => {
    this.setState({activeStep: 1, typeOfService: 'telefonia_movil'});
  }

  bandaAnchaMovil = () => {
    this.setState({activeStep: 1, typeOfService: 'banda_ancha_movil'});
  }

  goToForm = () => {
    this.setState({activeStep: 2});
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Mis Datos
          </Typography>
        </Toolbar>
      </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thanks for using Access My Info!
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Thank you' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Opv.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Opv);
