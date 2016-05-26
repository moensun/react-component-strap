/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/5/26
 * Time: 15:46
 */
'use strict';
import React from 'react';

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
                            dsdsds
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});