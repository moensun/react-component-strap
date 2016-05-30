/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/5/30
 * Time: 16:14
 */
'use strict';

import React from 'react';

import {MSTreeView} from "../../src/export";

export default React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount:function () {
        $.ajax({
            method:'GET',
            url:'data/tree-list.json',
            success:function (response) {
                this.setState({data:response});
            }.bind(this)
        });
    },
    render(){
        return (
            <MSTreeView data={this.state.data}></MSTreeView>
        );
    }
});