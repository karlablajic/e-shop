import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import persistStore from 'redux-persist/es/persistStore';

const persistedStore = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <PersistGate loading={<div>Loading...</div>} persistor={persistedStore}></PersistGate>
    <App />
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
