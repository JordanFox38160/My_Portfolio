import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './style/navigation.css'
import './style/MainAccueil.css'
import './style/projet_container.css'
import './style/service.css'
import './style/404.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);