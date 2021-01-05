import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor } from './store/store'


const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
)

export default Root;