import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Routing from './components/Routing';
import { store } from './store';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Routing />
  </Provider>

);
