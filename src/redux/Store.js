import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import cakeReducer from './cake/CakeReducer';
import logger from 'redux-logger';
import RootReducer from './RootReducer';
const store=createStore(RootReducer,composeWithDevTools(
    applyMiddleware(logger),
    // other store enhancers if any
  ));
export default store;
