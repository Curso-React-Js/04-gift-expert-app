import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';

import { GifExpertApp } from './GifExpertApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode => ayuda componentes que tiene problemas o warnings
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
);
