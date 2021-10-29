import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import './core/imports.css';
import GlobalStyles from './core/globalStyles';
import Home from './app/views/Home.view';
import Contacts from './app/views/Contacts.view';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route
          path="/home"
          exact
          component={Home}
        />


        <Route
          path="/contacts"
          component={Contacts}
        />
      </Switch>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
