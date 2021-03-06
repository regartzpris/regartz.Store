import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'; //defaults to localStorage for web and AsyncStorage for react-native
import ReduxThunk from 'redux-thunk';

import rootReducer from './root-reducer';


const middlewares = [ReduxThunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);

}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);


export default { store, persistor };




