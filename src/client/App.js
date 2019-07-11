import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HeaderComponent from './components/common/HeaderComponent';
import PageNotFoundComponent from './components/common/PageNotFoundComponent';
import HomeComponent from './components/HomeComponent';
import FooController from './components/FooController';

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <HeaderComponent />
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/foos" component={FooController} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFoundComponent} />
      </Switch>
    </div>
  );
}

export default App;
