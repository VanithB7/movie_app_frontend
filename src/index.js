import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {  ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const middlewares=[reduxThunk];
if(process.env.NODE_ENV==='development')
{
  middlewares.push(logger);
}

const store =createStore(rootReducer,applyMiddleware(...middlewares));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
    <Provider store={store}>
      <ToastContainer />
    <App />
    </Provider>
    </BrowserRouter>
 
);

