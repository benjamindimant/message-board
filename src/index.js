import React from 'react';
import ReactDOM from 'react-dom';
import ListPosts from './containers/ListPosts';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import LoadingComponent from "./containers/LoadingComponent";
import AuthenticatedComponent from "./containers/AuthenticatedComponent";

/* This is a function */
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <LoadingComponent>
        <Switch>
          <Route path="/createaccount" component={CreateAccount} />
          <Route path="/login" component={Login} />
          <AuthenticatedComponent>
            <Route path="/" component={ListPosts} />
          </AuthenticatedComponent>
        </Switch>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
