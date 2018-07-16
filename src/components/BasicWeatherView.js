import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import {TEMPERATURE_UNIT_KELVIN} from "config/Constants";
import {temperatureConverter} from 'utils/WeatherUtils'

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    card:
        {
            position: "relative",
            margin: "25px 0",
            width: '50%',
            boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
            borderRadius: "3px",
            color: "rgba(0, 0, 0, 0.87)",
            minWidth: 200,


        },
    cardHeader: {
        borderRadius: "3px",
        padding: "1rem 15px",
        marginLeft: "15px",
        marginRight: "15px",
        marginTop: "-30px",
        color: "#fff",
        background: "linear-gradient(60deg, #26c6da, #00acc1)",
        boxShadow:
            "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
    },
    cardBody: {
        flex: "1 1 auto"
    }
});
const BasicWeatherView = ({weatherInformation, classes, renderTemperatureUnitIn}) => {
    const {unit, where: location, description, temperature} = weatherInformation;
    const degreeIcon = renderTemperatureUnitIn !== TEMPERATURE_UNIT_KELVIN ? renderTemperatureUnitIn.toLowerCase() : 'degrees';
    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <CardHeader title={location} className={classes.cardHeader}>
                </CardHeader>
                <CardContent className={classes.cardBody}>
                    <Typography>
                        {description}
                    </Typography>
                    <Typography variant="headline" component="h2">
                        {temperatureConverter(temperature, unit, renderTemperatureUnitIn)}
                        <i className={`wi wi-${degreeIcon}`}></i>
                    </Typography>
                </CardContent>
            </div>
        </div>
    );

};
BasicWeatherView.propTypes = {
    weatherInformation: PropTypes.object.isRequired,
    renderTemperatureUnitIn: PropTypes.string.isRequired,
};

export default withStyles(styles)(BasicWeatherView);