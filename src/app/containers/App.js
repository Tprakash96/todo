import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from '../store';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
        <ToastContainer />
      </Provider>);
  }
}

export default App;
