/**
 * Created by superBinlin.
 * Copyright MoenSun
 * User: superBinlin
 * Date: 16/5/31
 * Time: 10:25
 */
'use strict';
import React from 'react';

export default React.createClass({
    getInitialState: function() {
        return {

        };
    },
    getInitialProps: function() {
        return {};
    },
    checkTab:function () {
        this.props.checkTab(this.props.index)
    },
    render(){
        var isactive;
        if(this.props.lidata.active){
            isactive = 'active';
        }
        return (
            <li className={isactive} onClick={this.checkTab}>
                <a>
                    {this.props.lidata.text}
                </a>
            </li>
        );
    }
});