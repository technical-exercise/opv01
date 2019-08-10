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
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

class Form extends React.Component {
  state = {
    acceso: true,
    cancelacion: true,
    rectificacion: true,
    oposicion: true,
    revocacion: true,
    limitacion: true,
    ife: true,
    visa: true,
    cedula: true,
    license: true,
    passport: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { acceso, cancelacion, rectificacion, oposicion, revocacion, limitacion, ife, visa, cedula, license, passport } = this.state;
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
          Tipo de solicitud
        </Typography>
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={acceso} onChange={this.handleChange('acceso')} value="acceso" />
              }
              label="Acceso"
            />
            <FormControlLabel
              control={
                <Checkbox checked={cancelacion} onChange={this.handleChange('cancelacion')} value="cancelacion" />
              }
              label="Cancelación"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rectificacion}
                  onChange={this.handleChange('rectificacion')}
                  value="rectificacion"
                />
              }
              label="Rectificación"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={oposicion}
                  onChange={this.handleChange('oposicion')}
                  value="oposicion"
                />
              }
              label="Oposición"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={revocacion}
                  onChange={this.handleChange('revocacion')}
                  value="revocacion"
                />
              }
              label="Revocación"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={limitacion}
                  onChange={this.handleChange('limitacion')}
                  value="limitacion"
                />
              }
              label="Limitación de uso o divulgación de datos personales"
            />
          </FormGroup>
        </FormControl>
        <br />
        <Typography variant="h6" gutterBottom>
          Solicitud
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              multiline
              id="descripcion"
              name="descripcion"
              label="Favor de describir brevemente su solicitud"
              fullWidth
              autoComplete="descripcion"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Favor de indicar dirección de correo electrónico para notificarle la respuesta"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              multiline
              id="descripcion2"
              name="descripcion2"
              label="Favor de describir los datos personales pertinentes"
              fullWidth
              autoComplete="descripcion2"
            />
          </Grid>
        </Grid>
        <br />
        <FormControl component="fieldset">
          <FormGroup>
          <FormLabel component="legend">Acompaña a su solicitud mediante copia electrónica de identificación oficial vigente</FormLabel>
            <FormControlLabel
              control={
                <Checkbox checked={ife} onChange={this.handleChange('ife')} value="ife" />
              }
              label="Credencial de elector"
            />
            <FormControlLabel
              control={
                <Checkbox checked={visa} onChange={this.handleChange('visa')} value="visa" />
              }
              label="FM2, FM3 (documento migratorio vigente)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={cedula}
                  onChange={this.handleChange('cedula')}
                  value="cedula"
                />
              }
              label="Cédula Profesional Digitalizada"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={license}
                  onChange={this.handleChange('license')}
                  value="license"
                />
              }
              label="Licencia de manejo tipo A, B o C"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={passport}
                  onChange={this.handleChange('passport')}
                  value="passport"
                />
              }
              label="Pasaporte"
            />
          </FormGroup>
        </FormControl>
      </React.Fragment>
    );
  }
}

export default Form;
