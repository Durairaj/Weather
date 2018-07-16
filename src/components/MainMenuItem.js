import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const styles = theme => ({
  listButton: {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    textAlign: 'left',
  },
  listButtonActive: {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    textAlign: 'left',
    color: 'rgba(68, 68, 68, 0.8)',
    'border-left': '4px solid #00a5de',
    '&:hover': {
      color: '#00a5de',
    },
  },
});

const MainMenuItem = ({ name, path, active, classes, handleMenuClick }) => (
  <ListItem
    button={!active}
    onClick={handleMenuClick(path)}
    classes={
      active
        ? { default: classes.listButtonActive }
        : { default: classes.listButton }
    }
  >
    <ListItemIcon>
      <ChevronRightIcon />
    </ListItemIcon>
    <ListItemText
      disableTypography
      primary={name}
      classes={{ primary: classes.listButton }}
    />
  </ListItem>
);

MainMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  active: PropTypes.bool,
  handleMenuClick: PropTypes.func.isRequired,
};
export default withStyles(styles)(MainMenuItem);
