import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter
} from "react-router-dom";



import Navigation from './components/navigation'
import { UserContext , getUser} from "./services/auth";
import Routeur from './routeur'
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContext.Provider value={getUser()}>
    <React.StrictMode>
      <BrowserRouter>
        <Navigation />
        <Routeur />
      </BrowserRouter>
    </React.StrictMode >
  </UserContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
