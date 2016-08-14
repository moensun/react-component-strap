/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/5/26
 * Time: 15:34
 */
'use strict';
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/sass/style.scss";
import React from 'react';
import ReactDom from 'react-dom';

import Routes from "./route/routes.jsx";

ReactDom.render(<Routes />,document.getElementById("app"));