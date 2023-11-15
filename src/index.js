import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 89de96929240d293e10cc1493bf38fd1eeb1a289
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
 // <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
 // </React.StrictMode>
>>>>>>> 89de96929240d293e10cc1493bf38fd1eeb1a289
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
