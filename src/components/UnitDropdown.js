import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Settings from '@material-ui/icons/Settings';
import Popover from '@material-ui/core/Popover';
import ListItem from '@material-ui/core/ListItem';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import {infoColor} from "config/Theme";
import {TEMPERATURE_UNITS} from 'config/Constants'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',

    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },

    button: {
        backgroundColor: infoColor,
        boxShadow:
            "0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)",
        "&:hover,&:focus": {
            backgroundColor: infoColor,
            boxShadow:
                "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"
        },
        color: "#FFFFFF",
        border: "none",
        borderRadius: "3px",
        position: "relative",
        padding: "12px 30px",
        margin: "10px 1px",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition:
            "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",

    }, settingsIcon: {
        marginRight: theme.spacing.unit,
    },
    dropdown: {
        borderRadius: "3px",
        border: "0",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
        top: "100%",
        zIndex: "1000",
        minWidth: "160px",
        padding: "5px 0",
        margin: "2px 0 0",
        fontSize: "14px",
        textAlign: "left",
        listStyle: "none",
        backgroundColor: "#fff",
        backgroundClip: "padding-box"
    },
    dropdownItem: {
        fontSize: "13px",
        padding: "10px 20px",
        margin: "0 5px",
        borderRadius: "2px",
        position: "relative",
        transition: "all 150ms linear",
        display: "block",
        clear: "both",
        fontWeight: "400",
        height: "fit-content",
        color: "#333",
        whiteSpace: "nowrap"
    },
    dropdownItemHover: {
        "&:hover": {
            boxShadow:
                "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(33, 33, 33, 0.4)",
            backgroundColor: infoColor,
            color: "#fff"
        }
    },
    dropdownItemSelected: {
        color: infoColor,
    }
});

class UnitDropdown extends React.Component {
    state = {
        anchorEl: null,
        unit: this.props.defaultUnit

    };

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };
    handleClose = (event) => {
        this.setState({
            anchorEl: null,
        });
    };

    handleSelect = (unit) => {
        this.setState({
            anchorEl: null,
            unit
        });
        this.props.handleUnitChange(unit)
    };

    render() {
        const {classes} = this.props;
        const {unit, anchorEl} = this.state;

        return (
            <React.Fragment>

                <Button variant="outlined" size="small" aria-label="Temperature Unit Settings"
                        className={classes.button}
                        onClick={this.handleClick}>
                    <Settings className={classes.settingsIcon}/>
                    Unit - {this.state.unit ? this.state.unit[0] : ''}
                </Button>

                <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}

                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <ClickAwayListener onClickAway={this.handleClose}>
                        <Grow
                            in={Boolean(anchorEl)}
                            id="menu-list"
                            style={{transformOrigin: "0 0 0"}
                            }
                        >
                            <Paper className={classes.dropdown}>
                                {TEMPERATURE_UNITS.map(value => (
                                    <ListItem button={value !== unit} key={value}
                                              onClick={() => this.handleSelect(value)}
                                              className={classNames({
                                                  [classes.dropdownItem]: true,
                                                  [classes.dropdownItemHover]: value !== unit,
                                                  [classes.dropdownItemSelected]: value === unit
                                              })}>{value}</ListItem>
                                ))}
                            </Paper>
                        </Grow>


                    </ClickAwayListener>
                </Popover>
            </React.Fragment>
        );
    }
}

UnitDropdown.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    handleUnitChange: PropTypes.func.isRequired,
    defaultUnit: PropTypes.string.isRequired
};

export default withStyles(styles, {withTheme: true})(UnitDropdown);
