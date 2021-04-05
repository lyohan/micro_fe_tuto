import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.renderCats = (containerId) => {
  ReactDOM.render(
    <App />,
    document.getElementById(containerId)
  )
}

window.unmountCats = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
}

if (!document.getElementById('Cats-container')) {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
