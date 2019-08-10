import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function Form() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Información del titular
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="apellidoPaterno"
            name="apellidoPaterno"
            label="Apellido paterno"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="apellidoMaterno"
            name="apellidoMaterno"
            label="Apellido materno"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="nombre"
            name="nombre"
            label="Nombre(s)"
            fullWidth
            autoComplete="nombre"
          />
        </Grid>
      </Grid>
      <br />
      <Typography variant="h6" gutterBottom>
        Domicilio
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="calle"
            name="calle"
            label="Calle"
            fullWidth
            autoComplete="calle"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="numeroExterior"
            name="numeroExterior"
            label="Número exterior"
            fullWidth
            autoComplete="numero_exterior"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="numeroInterior"
            name="numeroInterior"
            label="Número interior"
            fullWidth
            autoComplete="numero_interior"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="delegacionMunicipio"
            name="delegacionMunicipio"
            label="Delegación o municipio"
            fullWidth
            autoComplete="delegacionMunicipio"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Código postal"
            fullWidth
            autoComplete="zip"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="entidadFederativa"
            name="entidadFederativa"
            label="Entidad federativa"
            fullWidth
            autoComplete="entidadFederativa"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="mobile"
            name="mobile"
            label="Número de Celular (10 dígitos)"
            fullWidth
            autoComplete="mobile"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Teléfono de casa"
            fullWidth
            autoComplete="phone"
          />
        </Grid>
      </Grid>
      <br />
      <Typography variant="h6" gutterBottom>
        Solicitud
      </Typography>
    </React.Fragment>
  );
}

export default Form;
