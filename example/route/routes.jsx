/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/5/30
 * Time: 14:15
 */
'use strict';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';


import App from "../app.jsx";

import NoMatch from "../no-match.jsx";


import MSTreeList from "../component/ms-tree-list";
import MSTreeView from "../component/ms-tree-view";


export default React.createClass({
    render(){
        return (
            <Router>
                <Route path="/" component={App}>
                    <Route path="ms-tree-list" component={MSTreeList}/>
                    <Route path="ms-tree-view" component={MSTreeView}/>
                    <Route path="*" component={NoMatch}/>
                </Route>
            </Router>
        );
    }
});