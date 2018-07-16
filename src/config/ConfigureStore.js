import {PERSIST_APP_KEY} from 'config/Constants';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from 'store/Index';
import {persistStore, persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export default function configureStore(initialState = {}, history) {

    const persistConfig = {
        key: PERSIST_APP_KEY,
        storage,
        whitelist: ['settings'], // only unit saved filters will be persisted
        stateReconciler: autoMergeLevel2,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const routerMiddleWare = routerMiddleware(history);
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    let middleware = [routerMiddleWare, thunkMiddleware];
    if (process.env.NODE_ENV !== 'production') {
        const loggerMiddleware = createLogger();
        middleware = [...middleware, loggerMiddleware];
    }
    const store = createStore(
        persistedReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleware)),
    );
    const persistedStore = persistStore(store);
    return {store, persistedStore};
};
