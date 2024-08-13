import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { Provider } from 'react-redux';
import store from './utils/store';
import './stylesheet/style.scss';
import InitializeDataMocked from './components/InitializeDataMocked';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store} stabilityCheck='always'>
      <InitializeDataMocked /> {/* middleware */}
      <Router />
    </Provider>
  </BrowserRouter>
);
