import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/reducers';

const reduxStore = createStore(
    rootReducer,
    applyMiddleware(logger)
);

export default reduxStore;