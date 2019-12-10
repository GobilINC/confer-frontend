
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const styles = theme => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 14,
      color: theme.palette.blackBrownForeColor,
      opacity: 0.6,
      cursor: 'pointer'
    }
  };
};

const BackButton = ({ classes, label, onBack }) => {
  return (
    <Typography
      className={classes.root}
      onClick={onBack}
    >
      <ChevronLeft />
      {label}
    </Typography>
  );
};

BackButton.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  onBack: PropTypes.func
};

BackButton.defaultProps = {
  label: 'Back',
  onBack: () => { }
};

export default withStyles(styles, { withTheme: true })(BackButton);
