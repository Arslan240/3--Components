import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Movies from './components/movies';
import reportWebVitals from './reportWebVitals';
// both these libraries are installed under node_modules, when webpack, check this it'll pull these css files.
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'


ReactDOM.render(
  <React.StrictMode>
    <Movies />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
