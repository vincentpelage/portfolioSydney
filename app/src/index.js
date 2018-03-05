/*
 * Npm import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';


/*
 * Local import
 */
import App from 'src/components/App';


/*
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  const rootComponent = (
    <App />
  );
  render(rootComponent, document.getElementById('root'));
});
