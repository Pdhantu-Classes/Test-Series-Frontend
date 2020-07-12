import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
 import Routes from './Routes'
import { transitions, positions,types, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import TestRank from './pages/TestSeries/TestRank';
import TestResponse from './pages/TestSeries/TestResponse';

import TestScreen from './pages/TestSeries/TestScreen';
import Timer from './shared/Timer'
const options = {
  position: positions.MIDDLE,
  timeout: 2000,
  offset: '20px',
  type: types.INFO,
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
      <AlertProvider template={AlertTemplate} {...options}>
           {/* <Timer seconds={20} /> */}
          <Routes />
          {/* <TestScreen/> */}
          {/* <TestResponse/> */}
          {/* <TestRank/> */}
        
      </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
