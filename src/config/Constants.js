const URL = {
  OPEN_WEATHER_API: 'http://localhost:8081/weather0.json',
  TREMENDOUS_WEATHER_API: 'http://localhost:8081/weather1.json',
};
const PERSIST_APP_KEY = 'weather';

const TEMPERATURE_UNIT_KELVIN = 'kelvin';
const TEMPERATURE_UNIT_FAHRENHEIT = 'fahrenheit';
const TEMPERATURE_UNIT_CELSIUS = 'celsius';
const TEMPERATURE_UNITS = [
  TEMPERATURE_UNIT_KELVIN,
  TEMPERATURE_UNIT_FAHRENHEIT,
  TEMPERATURE_UNIT_CELSIUS,
];
const DEFAULT_UNIT = TEMPERATURE_UNITS[0];

const OPEN_WEATHER_CONFIG = { path: '/openWeather', name: 'OPEN WEATHER' };
const TREMENDOUS_WEATHER_CONFIG = {
  path: '/tremendousWeather',
  name: 'TREMENDOUS WEATHER',
};
const ROUTE_PATH_LINKS = [OPEN_WEATHER_CONFIG, TREMENDOUS_WEATHER_CONFIG];
export {
  URL,
  PERSIST_APP_KEY,
  DEFAULT_UNIT,
  TEMPERATURE_UNITS,
  TEMPERATURE_UNIT_CELSIUS,
  TEMPERATURE_UNIT_FAHRENHEIT,
  TEMPERATURE_UNIT_KELVIN,
  OPEN_WEATHER_CONFIG,
  TREMENDOUS_WEATHER_CONFIG,
  ROUTE_PATH_LINKS,
};
