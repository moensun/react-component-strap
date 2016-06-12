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
        return {

        };
    },
    render(){
        return (
                {
                    this.props.data.map(function(row,index){
                            return <div></div>
                        }.bind(this)
                    )
                }
        );
    }
});