import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./store/reducers";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const composeEnhancers =
          typeof window === 'object' &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
              window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              }) : compose
;

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk),
));

const app = <Provider store={store}>
    <App/>
</Provider>;

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
