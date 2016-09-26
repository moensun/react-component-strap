/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/9/26
 * Time: 10:41
 */
'use strict';
import React,{Component} from "react";

export default React.createClass({
    getInitialState: function() {
        return {
            "dayItem": this.props.dayItem
        };
    },
    render() {
        return (
            <button><span></span></button>
        )
    }
});