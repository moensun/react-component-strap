/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/5/30
 * Time: 16:09
 */
'use strict';
import React from 'react';

import TreeView from "./tree-view";

export default React.createClass({
    render(){
        return (
            <li >
                {this.props.data.text}
                {
                    (()=>{
                        if(this.props.data.children){
                            return <TreeView data={this.props.data.children} />
                        }
                    })()
                }
            </li>
        );
    }
});