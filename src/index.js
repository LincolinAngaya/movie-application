import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Route, BrowserRouter } from 'react-router-dom';
import { FavoriteContextProvider } from './components/store/favorite-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<FavoriteContextProvider>
<BrowserRouter>
    <App />
</BrowserRouter>
</FavoriteContextProvider>
 
);

