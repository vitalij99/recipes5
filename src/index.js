import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from 'styles/GlobalStyles';

import App from 'components/App';

import { PersistGate } from 'redux-persist/integration/react';
import Loader from 'components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loader />}>
        <BrowserRouter basename="/recipes5">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
