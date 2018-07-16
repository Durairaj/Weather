import React from 'react';
import Weather from 'containers/WeatherHOC';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorInformation from 'components/ErrorInformation';
import BasicWeatherView from 'components/BasicWeatherView';
import { URL, OPEN_WEATHER_CONFIG } from 'config/Constants';

const OpenWeather = () => (
  <Weather
    url={URL.OPEN_WEATHER_API}
    provider={OPEN_WEATHER_CONFIG.name}
    onLoading={() => <LoadingIndicator />}
    onLoadComplete={(weatherInformation, selectedUnit) => {
      return (
        <BasicWeatherView
          weatherInformation={weatherInformation}
          renderTemperatureUnitIn={selectedUnit}
        />
      );
    }}
    onError={error => {
      return <ErrorInformation error={error} />;
    }}
  />
);
export default OpenWeather;
