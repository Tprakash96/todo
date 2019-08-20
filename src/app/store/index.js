import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const initialState = {};
let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__) {
    const devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
    middleware = compose(
        middleware,
        devtools
    )
}

export default createStore(rootReducer, initialState, middleware);