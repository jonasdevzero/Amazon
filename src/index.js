import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GlobalStyles } from './GlobalStyles';
import { StateProvider } from './Provider/StateProvider';
import reducer, { initialState } from './Provider/reducer';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <GlobalStyles />
    <App />
  </StateProvider>
  ,document.getElementById('root')
);
