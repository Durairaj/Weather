import React from 'react';
import Weather from 'containers/WeatherHOC';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorInformation from 'components/ErrorInformation';
import DetailedWeatherView from 'components/DetailedWeatherView';
import { URL, TREMENDOUS_WEATHER_CONFIG } from 'config/Constants';

const TremendousWeather = () => (
  <Weather
    url={URL.TREMENDOUS_WEATHER_API}
    provider={TREMENDOUS_WEATHER_CONFIG.name}
    onLoading={() => <LoadingIndicator />}
    onLoadComplete={(weatherInformation, selectedUnit) => {
      return (
        <DetailedWeatherView
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
export default TremendousWeather;
