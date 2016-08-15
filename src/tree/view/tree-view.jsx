/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/5/30
 * Time: 16:11
 */
'use strict';
import React from 'react';

import TreeNode from "./tree-node";

export default React.createClass({
    getInitialState: function() {
        return { data: this.props.data || {} };
    },
    componentWillReceiveProps( nextProps ){
        this.setState({
            'data': nextProps.data
        });
    },
    render(){
        return (
            <ul className="ms-tree-view" >
                {
                    this.state.data.map(function(row,index){
                        return (
                            <TreeNode key={index} record={row}></TreeNode>
                        );
                    })
                }
            </ul>
        );
    }
});