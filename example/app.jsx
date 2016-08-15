/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/5/26
 * Time: 15:46
 */
'use strict';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';


export default React.createClass({
    render(){
        return (
            <div className="container-fluid">
                <div className="col-md-8">
                    {this.props.children}
                </div>
                <div className="col-md-4">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to={`ms-tree-list`}>ms-tree-list</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to={`ms-tree-menu`}>ms-tree-menu</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to={`zb-tab`}>zb-tab</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});