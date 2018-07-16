import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MainMenuItem from 'components/MainMenuItem';
import TemperatureUnitContainer from 'containers/TemperatureUnitContainer';
import { infoColor } from 'config/Theme';
import {
  OPEN_WEATHER_CONFIG,
  TREMENDOUS_WEATHER_CONFIG,
} from 'config/Constants';

const styles = theme => ({
  flex: {
    flexGrow: 1,
  },
  appBar: {
    display: 'flex',
    border: '0',
    padding: '0.625rem 0',
    marginBottom: '20px',
    width: '100%',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    position: 'relative',
    backgroundColor: infoColor,
    color: '#FFFFFF',
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)',
  },
  container: {
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    '&:hover,&:focus': {
      backgroundColor: infoColor,
      color: '#000000',
      boxShadow:
        '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)',
    },
  },
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
  paper: {
    width: '100%',
  },
});

class Header extends React.Component {
  state = {
    open: false,
    selectedItem: OPEN_WEATHER_CONFIG.path,
  };

  handleMenuOpen = () => {
    this.setState({ open: true });
  };
  handleMenuClose = () => {
    this.setState({ open: false });
  };

  handleChangeList = path => () => {
    if (path && this.state.open) {
      this.setState({
        selectedItem: path,
        open: false,
      });
      this.props.history.push(path);
      return <Redirect to={path} />;
    }
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <React.Fragment>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar variant="dense" className={classes.container}>
            <IconButton
              color="inherit"
              aria-label="Open Menu"
              onClick={this.handleMenuOpen}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.flex} />
            <TemperatureUnitContainer />
          </Toolbar>
        </AppBar>
        <main>
          <ClickAwayListener onClickAway={this.handleMenuClose}>
            <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
              <List>
                <MainMenuItem
                  name={OPEN_WEATHER_CONFIG.name}
                  path={OPEN_WEATHER_CONFIG.path}
                  handleMenuClick={this.handleChangeList}
                  active={this.state.selectedItem === OPEN_WEATHER_CONFIG.path}
                />
                <Divider />
                <MainMenuItem
                  name={TREMENDOUS_WEATHER_CONFIG.name}
                  path={TREMENDOUS_WEATHER_CONFIG.path}
                  handleMenuClick={this.handleChangeList}
                  active={
                    this.state.selectedItem === TREMENDOUS_WEATHER_CONFIG.path
                  }
                />
                <Divider />
              </List>
            </Grow>
          </ClickAwayListener>
        </main>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(Header));
