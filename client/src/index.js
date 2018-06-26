import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/layout/home/home';
import registerServiceWorker from './registerServiceWorker';
import './App.js';


ReactDOM.render(<Home />, document.getElementById('body-component'));
registerServiceWorker();
