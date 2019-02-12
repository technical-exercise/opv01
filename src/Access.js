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
        Your request is ready
      </Typography>
      <Typography paragraph>
        February 11th, 2019
      </Typography>
      <Typography paragraph>
        The Office of the Bell Privacy Ombudsman 
      </Typography>
      <Typography paragraph>
        Dear Privacy Officer:
      </Typography>
      <Typography paragraph>
        I am a user of your telecommunications service, and am interested in both learning more about your data management practices and about the kinds of personal information that you maintain and retain about me. So this is a request to access my personal data under’ Principle 4.9 of Schedule 1 and section 8 Canada’s federal privacy legislation, the Personal Information Protection and Electronic Documents Act (PIPEDA).
      </Typography>
      <Typography paragraph>
    I have the following questions about the collection, use, and disclosure of my personal data:
      </Typography>
      <Typography paragraph>
    I am requesting a copy of all records which contain my personal information from your organization.
      </Typography>
      <Typography paragraph>
    The following is a non-exclusive listing of all information that Bell may hold about me, including the following:
      </Typography>
      <li>
        <Typography component="span">
    Call logs E.g. numbers dialed, times and dates of calls, call durations, routing information, and any geolocational or cellular tower information associated with the calls)
      </Typography>
      </li>
      <li>
        <Typography component="span">
    Mobile app data Information collected about me, or persons/devices associated with my account, using one of your company’s mobile device applications
      </Typography>
      </li>
      <li>
        <Typography component="span">
    Geolocation data collected about me, my devices, and/or associated with my account (e.g. GPS information, cell tower information)
      </Typography>
      </li>
      <li>
        <Typography component="span">
    IP address logs associated with me, my devices, and/or my account (e.g. IP addresses assigned to my devices/router, IP addresses or domain names of sites I visit and the times, dates, and port numbers)
      </Typography>
      </li>
      <li>
        <Typography component="span">
    Disclosures to third parties Any information about disclosures of my personal information, or information about my account or devices, to other parties, including law enforcement and other state agencies
      </Typography>
      </li>
      <li>
        <Typography component="span">
    Text & multimedia messages (sent and received, including date, time, and recipient information)
      </Typography>
      </li>
      <li>
        <Typography component="span">
    Subscriber information that you store about me, my devices, and/or my account
      </Typography>
      </li>
      <li>
        <Typography component="span">
    Other Any additional kinds of information that you have collected, retained, or derived from the telecommunications services or devices that I, or someone associated with my account, have transmitted or received using your company’s services
      </Typography>
      </li>
      <Typography paragraph>
    If your organization has other information in addition to these items, I formally request access to that as well. If your service includes a data export tool, please direct me to it, and ensure that in your response to this letter, you provide all information associated with me that is not included in the output of this tool. Please ensure that you include all information that is directly associated with my name, phone number, e-mail, or account number, as well as any other account identifiers that your company may associate with my personal information.
      </Typography>
      <Typography paragraph>
    You are obligated to provide copies at a free or minimal cost within thirty (30) days in receipt of this message. If you choose to deny this request, you must provide a valid reason for doing so under Canada’s PIPEDA. Ignoring a written request is the same as refusing access. See the guide from the Office of the Privacy Commissioner at: http://www.priv.gc.ca/information/guide_e.asp#014. The Commissioner is an independent oversight body that handles privacy complaints from the public.
      </Typography>
      <Typography paragraph>
    Please let me know if your organization requires additional information from me before proceeding with my request.
      </Typography>
    </React.Fragment>
  );
}

Access.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Access);
