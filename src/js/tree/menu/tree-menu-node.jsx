/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/5/30
 * Time: 16:09
 */
'use strict';
import React from 'react';
import classnames from "classnames";

import TreeMenu from "./tree-menu";

export default React.createClass({
    getInitialState: function() {
        return {record: this.props.record || []};
    },
    render(){
        let isLeaf = !this.state.record.children;
        let isExpanded = this.state.record.expanded;
        let aClassName = classnames({
            'ms-menu-open':isExpanded
        });
        return (
            <li >
                <a onClick={this.toggle} className={aClassName}>{this.state.record.text}
                    {
                        (()=>{
                            if( !isLeaf && !isExpanded){
                                return <i className="glyphicon glyphicon-menu-right pull-right"></i>
                            }else if( !isLeaf && isExpanded ){
                                return <i className="glyphicon glyphicon-menu-down pull-right"></i>
                            }
                        })()
                    }
                </a>
                {
                    (()=>{
                        if(this.state.record.children && this.state.record.expanded ){
                            return <TreeMenu data={this.state.record.children} />
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