import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './App';

// store: handles the global access to data using redux
// various reducers are created in the store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
