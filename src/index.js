
import React from 'react';
import ReactDOM from 'react-dom';

// import work page
import App from './App';

// service worker
import * as serviceWorker from './serviceWorker';

// styles
import './style/main.css';

// render page
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();