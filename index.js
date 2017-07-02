import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './Conponents/registerServiceWorker';
import './index.css';
import {routes} from './routes'


ReactDOM.render(routes(), document.getElementById('app-container'));
registerServiceWorker();
