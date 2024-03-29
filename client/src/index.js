import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/RootReducer'
import thunk from 'redux-thunk'
// import * as serviceWorker from './serviceWorker';

let store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root'));

// serviceWorker.register();

// serviceWorker.register('/offline.js', {scope: '/'})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
