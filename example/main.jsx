/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/5/26
 * Time: 15:34
 */
'use strict';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';


import App from "./app.jsx";
import NoMatch from "./no-match.jsx";

ReactDom.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
),document.getElementById("app"));