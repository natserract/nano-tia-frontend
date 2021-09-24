import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
import { AllContextProvider } from './store/configureStore'

ReactDOM.render(
  <AllContextProvider>
    <BrowserRouter>
      <React.Suspense fallback={<h2>Loading</h2>}>
        <Routes />
      </React.Suspense>
    </BrowserRouter>
  </AllContextProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
