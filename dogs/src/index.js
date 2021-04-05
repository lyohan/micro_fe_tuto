import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.renderDogs = (containerId) => {
  ReactDOM.render(
    <App />,
    document.getElementById(containerId)
  )
}

window.unmountDogs = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
}

if (!document.getElementById('Dogs-container')) {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
