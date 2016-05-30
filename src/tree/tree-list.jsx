/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/5/30
 * Time: 13:57
 */
'use strict';
import React from 'react';

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
                            <li key={index}>ddd</li>
                        );
                    })
                }
            </ul>
        );
    }
});