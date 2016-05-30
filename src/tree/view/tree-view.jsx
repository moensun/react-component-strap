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
        return {data: []};
    },
    render(){
        return (
            <ul>
                {
                    this.props.data.map(function(row,index){
                        return (
                            <TreeNode key={index} data={row}></TreeNode>
                        );
                    })
                }
            </ul>
        );
    }
});