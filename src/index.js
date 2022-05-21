import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import UserContext from './component/contextApi/UserContext';
import { store } from './component/Redux/Store';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Provider store={store}>
      <UserContext >
        <App />
      </UserContext>
    </Provider>
  </Router>
);

