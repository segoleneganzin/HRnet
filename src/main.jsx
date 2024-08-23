import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './utils/store';
import './stylesheet/style.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  /**
   * Wrap the entire application in BrowserRouter to enable routing with react-router.
   * The Provider component makes the Redux store available to the entire app.
   * PersistGate delays the rendering of the app's UI until the persisted state has been rehydrated.
   */
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
