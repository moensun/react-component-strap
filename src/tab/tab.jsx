/**
 * Created by superBinlin.
 * Copyright MoenSun
 * User: superBinlin
 * Date: 16/5/31
 * Time: 10:25
 */
'use strict';
import React from 'react';
import TabLi from './li';
import '../css/style.css';

export default React.createClass({
    getInitialState: function() {
        return {

        };
    },
    getInitialProps: function() {
        return {

        };
    },
    checkTab(index){
        this.props.checkTab(index);
    },
    render(){
        return (
                <div className="tabbable-custom">
                    <ul className="nav nav-tabs">
                        {
                            this.props.data.map(function(row,index){
                                    return <TabLi
                                                key={index}
                                                lidata={row}
                                                index={index}
                                                checkTab={this.checkTab}>
                                            </TabLi>
                                }.bind(this)
                            )
                        }
                    </ul>
                </div>
        );
    }
});