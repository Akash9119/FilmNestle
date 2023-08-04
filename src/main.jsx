import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';

import configureStore from './store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={configureStore}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>
);
