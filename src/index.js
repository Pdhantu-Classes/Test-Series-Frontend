import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App'
import { transitions, positions,types, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
// import AddNotice from './containers/Admin/AddNotice';

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
        <App />
        {/* <AddNotice/> */}
      </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
