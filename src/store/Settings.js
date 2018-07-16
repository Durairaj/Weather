import { DEFAULT_UNIT } from 'config/Constants';

// Initial State
const INITIAL_STATE = {
  tempUnit: DEFAULT_UNIT,
};
// action types
const CHANGE_TEMPERATURE_UNIT = '[Settings - Temperature Unit Change]';

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CHANGE_TEMPERATURE_UNIT:
      return {
        ...state,
        tempUnit: action.payload.unit,
      };
    default:
      return state;
  }
}

// Action Creators
export function changeTempUnit(unit) {
  return { type: CHANGE_TEMPERATURE_UNIT, payload: { unit } };
}
