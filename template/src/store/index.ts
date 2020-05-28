import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from 'store/reducers/appReducer';

const rootReducer = combineReducers({ appReducer });

const middlewares: any = [];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);
const store = createStore(rootReducer, composedEnhancers);

export default store;
