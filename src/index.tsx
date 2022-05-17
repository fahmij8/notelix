import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tw-elements';
import 'css/index.css';
import 'font-proxima-nova/style.css';
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
