import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import SayHelloFromA from 'application_a/SayHelloFromA';

ReactDOM.render(
  <>
    <App />
    <SayHelloFromA />
  </>,
  document.getElementById('root')
);
