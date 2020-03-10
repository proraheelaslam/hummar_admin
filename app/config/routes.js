import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import userList from '../views/users/lists';
import categoryLists from '../views/categories/lists';
import createCategory from '../views/categories/create';
import dashboardView from '../views/Dashboard';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';
import {HashRouter} from "react-router-dom";

export default (
    <HashRouter>
        <Route path="/" component={Main}>
            <IndexRedirect to="/dashboard" />
            <Route path="dashboard" component={dashboardView} title="Dashboard"> </Route>
            <Route path="users" component={userList} title="User"> </Route>
            <Route path="categories" component={categoryLists} title="Category"> </Route>
            <Route path="categories/create" component={createCategory} title="Category"> </Route>
        </Route>
    </HashRouter>

);