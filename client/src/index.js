import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';


// updated to React 17 standards

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(<App tab="home" />);

