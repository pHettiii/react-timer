import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tid from "./tid.js";
import * as serviceWorker from './serviceWorker';

function ClockOne() {
    return new Tid(1);
}
function ClockTwo() {
    return new Tid(2);
}
function ClockThree() {
    return new Tid(3);
}
function ClockFour() {
    return new Tid(4);
}

ReactDOM.render(
  <React.StrictMode>
      <div className={'watches'}>
      <ClockOne />
      <ClockTwo />
      <ClockThree />
      <ClockFour />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
