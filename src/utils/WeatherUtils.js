import {
  TEMPERATURE_UNIT_KELVIN,
  TEMPERATURE_UNIT_CELSIUS,
  TEMPERATURE_UNIT_FAHRENHEIT,
} from 'config/Constants';

// Open weather API Icon url for fetching image depending on icon code
export const openWeatherIconUrl = iconCode => {
  return `http://openweathermap.org/img/w/${iconCode}.png`;
};

export const dayAndDateBasedOnTimeUnix = dt => {
  const locale = 'en-us';
  const time = new Date(dt * 1000);
  const day = time.toLocaleDateString(locale, { weekday: 'long' });
  const monthName = time.toLocaleString(locale, { month: 'long' });
  const date = `${monthName} ${time.getDate()}, ${time.getFullYear()}`;
  return { day, date };
};

//https://www.metoffice.gov.uk/guide/weather/marine/glossary
export const visibilityMeasure = meter => {
  switch (true) {
    case meter < 1000:
      return 'Very poor';
    case meter >= 1000 && meter < 3704:
      return 'Poor';
    case meter >= 3704 && meter < 9260:
      return 'Moderate';
    case meter >= 9260:
      return 'Good';
    default:
      return 'Unknown';
  }
};

// Time format HH:MM
export const getTimeFormatted = dt => {
  const time = new Date(dt * 1000);
  return `${time.getHours()}:${time.getMinutes()}`;
};

// Source is the temperature scale and target is the type to convert
export const temperatureConverter = (temperature, sourceType, targetType) => {
  if (targetType.toLowerCase() === sourceType.toLowerCase()) {
    return parseFloat(temperature).toFixed(2);
  }
  if (!targetType || !sourceType) {
    throw new Error(`Conversion cannot be done due to invalid type`);
  }
  if (temperature === null || temperature === undefined) {
    throw new Error(`Cannot convert invalid temperature`);
  }
  let targetTemperature;
  switch (sourceType.toLowerCase()) {
    case TEMPERATURE_UNIT_KELVIN:
      targetTemperature =
        targetType.toLowerCase() === TEMPERATURE_UNIT_CELSIUS
          ? temperature - 273.15
          : temperature * 1.8 - 459.67;
      break;
    case TEMPERATURE_UNIT_FAHRENHEIT:
      targetTemperature =
        targetType.toLowerCase() === TEMPERATURE_UNIT_CELSIUS
          ? (temperature - 32) / 1.8
          : (temperature + 459.67) / 1.8;
      break;
    case TEMPERATURE_UNIT_CELSIUS:
      targetTemperature =
        targetType.toLowerCase() === TEMPERATURE_UNIT_FAHRENHEIT
          ? temperature * 1.8 + 32
          : temperature + 273.15;
      break;
    default:
      throw new Error(
        `Provided source temperature not of type ${TEMPERATURE_UNIT_CELSIUS} or ${TEMPERATURE_UNIT_FAHRENHEIT} or ${TEMPERATURE_UNIT_KELVIN}`,
      );
  }
  return parseFloat(targetTemperature.toString()).toFixed(2);
};
