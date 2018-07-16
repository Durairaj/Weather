import axios from 'axios';

// Initial State
const INITIAL_STATE = {};

// action types
const GET_WEATHER_REPORT_REQUEST = 'GET_WEATHER_REPORT_REQUEST';
const GET_WEATHER_REPORT_SUCCESS = 'GET_WEATHER_REPORT_SUCCESS';
const GET_WEATHER_REPORT_FAILURE = 'GET_WEATHER_REPORT_FAILURE';

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {

    switch (action.type) {
        case GET_WEATHER_REPORT_REQUEST:
            return Object.assign({}, state, {
                [action.provider]: {
                    provider: action.provider,
                    loading: true
                }
            });

        case GET_WEATHER_REPORT_SUCCESS:
            return Object.assign({}, state, {
                [action.provider]: {
                    provider: action.provider,
                    loading: false,
                    data: action.data
                }
            });
        case GET_WEATHER_REPORT_FAILURE:
            return Object.assign({}, state, {
                [action.provider]: {
                    provider: action.provider,
                    loading: false,
                    error: action.error
                }
            });
        default:
            return state;
    }
}

// Action Creators
export const getWeatherReport = (url, provider) => async (dispatch) => {
    try {
        dispatch({type: GET_WEATHER_REPORT_REQUEST, provider});
        const response = await axios.get(url);
        const {data} = response;
        dispatch({
            type: GET_WEATHER_REPORT_SUCCESS,
            data,
            provider
        });
        return data;
    } catch (e) {
        dispatch({
            type: GET_WEATHER_REPORT_FAILURE,
            error: e.message,
            provider

        });
        throw new Error(e.message)
    }
};