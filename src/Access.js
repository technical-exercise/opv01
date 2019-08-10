import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

function Access(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        Su solicitud está lista
      </Typography>
      <Typography paragraph>
        Agosto 10, 2019
      </Typography>
      <Typography paragraph>
        Departamento de Datos Personales
      </Typography>
      <Typography paragraph>
        Me permito hacer de su conocimiento, que soy usuario/a del servicio de banda ancha fija que esa empresa provee. Por ello, tengo derecho a acceder a los datos personales que su compañía posee, al igual que a conocer la manera en que ésta fue recolectada, se usa, divulga, transfiere, almacena y, en general, es objeto de cualquier tipo de tratamiento.
      </Typography>
      <Typography paragraph>
        Lo anterior, con fundamento en lo dispuesto en los artículos 1° y 16, párrafo segundo, de la Constitución Política de los Estados Unidos Mexicanos y 1, 2, 6, 22, 23, 28 y 29 de la Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP).
      </Typography>
      <Typography paragraph>
        En este entendido, solicito acceso a la siguiente información y datos personales:
      </Typography>
      <li>
        <Typography component="span">
          Qué datos personales poseen sobre mí, derivados de la contratación y la prestación del servicio;
        </Typography>
      </li>
      <li>
        <Typography component="span">
          Copia del contrato de prestación del servicio que celebré con ustedes;
        </Typography>
      </li>
      <li>
        <Typography component="span">
          Qué servicios adicionales tengo contratados;
        </Typography>
      </li>
      <li>
        <Typography component="span">
          La dirección IP de mi servicio;
        </Typography>
      </li>
      <li>
        <Typography component="span">
          Los fines para los que se utilizan mis datos personales;
        </Typography>
      </li>
      <li>
        <Typography component="span">
          Copia del aviso de privacidad integral vigente;
        </Typography>
      </li>
      <li>
        <Typography component="span">
          Nombre de los entes públicos y/o privados a los que se han transferido mis datos personales y para qué finalidades;
        </Typography>
      </li>
      <li>
        <Typography component="span">
          Nombre de los encargados a los que se ha llevado a cabo cualquier remisión de mis datos personales y para cuáles finalidades;
        </Typography>
      </li>
      <li>
        <Typography component="span">
          Fecha en que se activó el servicio de banda ancha móvil
        </Typography>
      </li>
      <li>
        <Typography component="span">
          Los datos referentes a  la fecha, hora y duración de las conexiones a internet realizadas a través del dispositivo de banda ancha fija;
        </Typography>
      </li>
      <li>
        <Typography component="span">
          Cualquier información recolectada por parte de aplicaciones móviles de esa empresa, sobre mi personas o de cualquier tercero que hayan sido recopiladas por el uso de dicha aplicación;
        </Typography>
      </li>
      <li>
        <Typography component="span">
          Fecha en que se cancelaron mis datos personales y constancia de ello;
        </Typography>
      </li>
      <li>
        <Typography component="span">
          Cualquier otro dato personal que posea en su base de datos.
        </Typography>
      </li>
      <Typography paragraph>
        El artículo 35 de la LFPDPPP exige que el trámite  de entrega de los datos personales sea gratuito, debiendo cubrir en mi caso, únicamente los gastos justificados de envío o el costo de reproducción en copias u otros formatos.
      </Typography>
      <Typography paragraph>
        Por su parte, el artículo 32 de la LFPDPPP requiere que su respuesta debe ser en un plazo máximo de veinte días hábiles, contados desde la fecha en que se recibió la solicitud de acceso, a efecto de que, si resulta procedente, se haga efectiva la misma dentro de los quince días siguientes a la fecha en que se comunica la respuesta. Estos plazos podrán ser ampliados una sola vez por un periodo igual, siempre y cuando así lo justifiquen las circunstancias del caso.
      </Typography>
      <Typography paragraph>
        En caso de que esa empresa no me entregue los datos personales en los términos asentados en esta carta, su respuesta deberá estar debidamente fundada y acompañar las pruebas necesarias. En su caso, en términos de lo previsto por el artículo 35 de la LFPDPPP, yo podré presentar una solicitud de protección de datos ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales.
      </Typography>
    </React.Fragment>
  );
}

Access.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Access);
