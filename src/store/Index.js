import { combineReducers } from 'redux';
import weather from 'store/Weather';
import settings from 'store/Settings';

export default combineReducers({
  settings,
  weather,
});
