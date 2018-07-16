import OpenWeather from "containers/OpenWeather";
import TremendousWeatherView from "containers/TremendousWeather";
import {OPEN_WEATHER_CONFIG,TREMENDOUS_WEATHER_CONFIG} from 'config/Constants'

const routes = [
    {path: OPEN_WEATHER_CONFIG.path, exact: true, name: OPEN_WEATHER_CONFIG.name, component: OpenWeather},
    {path: TREMENDOUS_WEATHER_CONFIG.path, exact: true, name: TREMENDOUS_WEATHER_CONFIG.name, component: TremendousWeatherView},
];
export default routes;
