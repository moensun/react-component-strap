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
    getInitialState: function() {
        return {record: this.props.record || []};
    },
    render(){
        return (
            <li >
                <a onClick={this.toggle}>{this.state.record.text}
                    {
                        (()=>{
                            if(this.state.record.children && !this.state.record.expanded){
                                return <i className="glyphicon glyphicon-menu-right pull-right"></i>
                            }else if(this.state.record.children && this.state.record.expanded){
                                return <i className="glyphicon glyphicon-menu-down pull-right"></i>
                            }
                        })()
                    }
                </a>
                {
                    (()=>{
                        if(this.state.record.children && this.state.record.expanded ){
                            return <TreeView data={this.state.record.children} />
                        }
                    })()
                }
            </li>
        );
    },
    toggle(){
        this.setState({
            record:Object.assign(this.state.record,{'expanded':!this.state.record.expanded})
        });
    }
});