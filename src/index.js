import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const theRootElement = document.getElementById('root');
const theRoot = ReactDOM.createRoot(theRootElement);

theRoot.render(
    <App/>
)