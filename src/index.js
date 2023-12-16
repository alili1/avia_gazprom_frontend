import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './colors.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

// import {fakeBackend} from '../src/_helpers';
// fakeBackend();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
);

reportWebVitals();
