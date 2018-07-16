import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import {
    getTimeFormatted,
    openWeatherIconUrl,
    dayAndDateBasedOnTimeUnix,
    visibilityMeasure,
    temperatureConverter
} from 'utils/WeatherUtils'
import {TEMPERATURE_UNIT_CELSIUS, TEMPERATURE_UNIT_KELVIN} from "config/Constants";



const styles = theme => ({


    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },

    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    gridRoot:
        {
            flexGrow: 1,

        },

    root: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    card:
        {
            position: "relative",
            margin: "25px 0",
            width: '100%',
            boxShadow: "1px 2px 4px 1px rgba(0, 0, 0, 0.14)",
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
    },
    informationContainer:
        {
            display: 'flex',
        },
    dateContainer:
        {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
    hiLowContainer:
        {
            display: 'flex',
            flexDirection: 'row',
        }
});

const DetailedWeatherView = ({weatherInformation, classes, renderTemperatureUnitIn}) => {

    const {clouds, main, sys, visibility: visibilityMeterValue, weather, wind, dt: timeInUnix, name} = weatherInformation;
    const {temp: mainTemperature, temp_min: minTemperature, temp_max: maxTemperature, pressure, humidity} = main;
    const {speed: windSpeed, deg: winDegree} = wind;
    const {country, sunrise: sunriseTime, sunset: sunsetTime} = sys;
    const {description, icon: weatherIcon} = weather[0];


    const openWeatherIconApiUrl = openWeatherIconUrl(weatherIcon);
    const {day, date} = dayAndDateBasedOnTimeUnix(timeInUnix);
    const windSpeedUnit = (mainTemperature.unit === TEMPERATURE_UNIT_CELSIUS) ? 'm/s' : 'miles/hr';
    const place = `${name}, ${country}`;
    const visiblityForecast = visibilityMeasure(visibilityMeterValue);
    const degreeIcon = renderTemperatureUnitIn !== TEMPERATURE_UNIT_KELVIN ? renderTemperatureUnitIn.toLowerCase() : 'degrees';


    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <CardHeader title={place} className={classes.cardHeader}>
                </CardHeader>
                <Grid container className={classes.gridRoot} spacing={16}>
                    <Grid item xs={3}>
                        <Grid
                            container
                            alignItems="center"
                            direction="column"
                            justify="center">
                            <Typography variant="headline" gutterBottom>
                                {day}
                            </Typography>
                            <Typography variant="headline" gutterBottom>
                                {date}
                            </Typography>

                            <div>
                                <ListItem>
                                    <ListItemIcon style={{color: 'red'}}>
                                        <i className="wi wi-sunrise"></i>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Sunrise" secondary={getTimeFormatted(sunriseTime)}/>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon style={{color: 'red'}}>
                                        <i className="wi wi-sunset"></i>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Sunset" secondary={getTimeFormatted(sunsetTime)}/>
                                </ListItem>
                            </div>

                        </Grid>
                    </Grid>

                    <Grid item xs={3}>
                        <Grid
                            container
                            alignItems="center"
                            direction="column"
                            justify="center">
                            <img src={openWeatherIconApiUrl} alt='Weather Icon'/>
                            <Typography variant="headline" gutterBottom>
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid
                            container
                            alignItems="center"
                            direction="column"
                            justify="center">
                            <Typography variant="display3" gutterBottom style={{textAlign: 'center'}}>
                                <span>{temperatureConverter(mainTemperature.value, mainTemperature.unit, renderTemperatureUnitIn)}</span>
                                <i className={`wi wi-${degreeIcon}`}></i>
                            </Typography>

                            <div>
                                <ListItem>
                                    <ListItemIcon style={{color: 'green'}}>
                                        <i className="wi wi-direction-up"></i>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Max"
                                                  secondary={
                                                      <span>{temperatureConverter(maxTemperature, mainTemperature.unit, renderTemperatureUnitIn)}
                                                          <i className={`wi wi-${degreeIcon}`}></i></span>}/>

                                </ListItem>

                                <ListItem>
                                    <ListItemIcon style={{color: 'green'}}>
                                        <i className="wi wi-direction-up"></i>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Min"
                                                  secondary={
                                                      <span>{temperatureConverter(minTemperature, mainTemperature.unit, renderTemperatureUnitIn)}
                                                          <i className={`wi wi-${degreeIcon}`}></i></span>}/>

                                </ListItem>
                            </div>
                        </Grid>

                    </Grid>
                    <Grid item xs={3}>

                        <ListItem>
                            <ListItemIcon style={{color: 'blue'}}>
                                <i className="wi wi-humidity"></i>
                            </ListItemIcon>
                            <ListItemText inset primary="Humidity"
                                          secondary={<span>{humidity}%</span>}/>

                        </ListItem>
                        <ListItem>
                            <ListItemIcon style={{color: 'blue'}}>
                                <i className="wi wi-barometer"></i>
                            </ListItemIcon>
                            <ListItemText inset primary="Pressure"
                                          secondary={<span>{pressure} hPa</span>}/>

                        </ListItem>

                        <ListItem>
                            <ListItemIcon style={{color: 'blue'}}>
                                <i className="wi wi-cloudy"></i>
                            </ListItemIcon>
                            <ListItemText inset primary="Cloudiness"
                                          secondary={<span>{clouds.all} %</span>}/>

                        </ListItem>

                        <ListItem>
                            <ListItemIcon style={{color: 'blue'}}>
                                <i className="wi wi-barometer"></i>
                            </ListItemIcon>
                            <ListItemText inset primary="Visiblity"
                                          secondary={visiblityForecast}/>

                        </ListItem>

                        <ListItem>
                            <ListItemIcon style={{color: 'blue'}}>
                                <i className={`wi wi-wind towards-${winDegree}-deg`}></i>
                            </ListItemIcon>
                            <ListItemText inset primary="Wind Speed"
                                          secondary={`${windSpeed} ${windSpeedUnit}`}/>
                        </ListItem>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
DetailedWeatherView.propTypes = {
    weatherInformation: PropTypes.object.isRequired,
    renderTemperatureUnitIn: PropTypes.string.isRequired,

};

export default withStyles(styles)(DetailedWeatherView);

