import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Massage from './Massage';

let testText = 'This is my first string in react';
let massageClass = 'Massage';
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Massage text = {testText} massage = {massageClass}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

