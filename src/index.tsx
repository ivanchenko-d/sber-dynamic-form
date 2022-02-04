import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import LayoutContainer from './layout';

import './index.css';
import 'antd/dist/antd.css'
import FormCreator from './pages/formCreator';
import FormTable from './pages/FormTable';
import EntityCreator from './pages/EntityCreator';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <LayoutContainer>
        <Switch>
          <Route exact path="/" component={FormTable} />
          <Route path="/form/:id/add" component={EntityCreator} />
          <Route path="/form" component={FormCreator} />
          <Redirect to={`/`} />
        </Switch>
      </LayoutContainer>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
