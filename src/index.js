import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // ... normal setup, create store and persistor, import components etc.  This delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux.

import { store, persistor } from './redux/store';



import App from './App';

import './index.css';



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));
