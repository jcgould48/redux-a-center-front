import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Spinner from './Components/Spinner/Spinner'
import MainRouter from './MainRouter'
import {Provider } from 'react-redux'
import store from './Components/redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Suspense fallback={<Spinner />}>
          <MainRouter />
        </React.Suspense>
      </Router>
    </Provider>
  );
}

export default App;
