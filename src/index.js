import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    // domain="dev-6dkni9ae.us.auth0.com"
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    // clientId='GicSSbvyI1SYbya5VXiGFW4cB5gNTjL5'
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
