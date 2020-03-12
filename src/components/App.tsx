import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import configureStore from '../store/Index';

import Home from './main/Main';
import PostDetail from './post/PostDetail';
import "./App.css";

export const store = configureStore();

export default () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/post/:slug" component={PostDetail}/>
                <Route path="*" component={() => <Redirect to="/"/>} />
            </Switch>
        </Router>
    </Provider>
)