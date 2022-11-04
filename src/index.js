import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './landingPage'
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import FilterCars from './filterCar';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element= {
              <LandingPage />
            } />
            <Route path='/cars' element= {
              <FilterCars />
            } />
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
