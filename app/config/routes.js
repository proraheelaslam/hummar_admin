import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import userList from '../views/users/lists';
import dashboardView from '../views/Dashboard';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/dashboard" />
            <Route path="dashboard" component={dashboardView} title="Dashboard"> </Route>
            <Route path="users" component={userList} title="User"> </Route>
        </Route>
    </Router>

);