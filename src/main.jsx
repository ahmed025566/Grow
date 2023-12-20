import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import {Provider} from 'react-redux'
import Store from './redux/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </ContextProvider>
  </React.StrictMode>,
);
