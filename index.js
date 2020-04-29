import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import Reducer from './Store/index';
import { Provider } from 'react-redux';
// import { HashRouter } from 'react-router-dom';
const store = createStore(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        {/* <HashRouter> */}
            <App />
        {/* </HashRouter> */}
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
