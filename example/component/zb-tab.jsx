/**
 * Created by superBinlin.
 * Copyright MoenSun
 * User: zhangbin
 * Date: 16/06/01
 * Time: 13:48
 */
'use strict';

import React from 'react';

import {ZBTab} from "../../src/export";


export default React.createClass({
    getInitialState: function() {
        return {
            data: [
                {id:'1',text:'test1',active:true},
                {id:'2',text:'test2',active:false},
                {id:'3',text:'test3',active:false}
            ]
        };
    },
    checkTab(index){
        var getStatedata = this.state.data;
        _.map(getStatedata,function(n,i){
            if(index == i){
                n.active = true
            }else{
                n.active = false
            }
        });
        this.setState({data:getStatedata})
    },
    render(){
        var getStatedata =this.state.data;
        var controlTab;
        _.map(getStatedata,function(n){
            if(n.active){
                controlTab = n.id;
            }
        })
        return (
            <div>
                <ZBTab data={this.state.data} checkTab={this.checkTab}></ZBTab>
                <div className={controlTab == 1 ? 'tabshow tabdiv':'tabdiv'}>1</div>
                <div className={controlTab == 2 ? 'tabshow tabdiv':'tabdiv'}>2</div>
                <div className={controlTab == 3 ? 'tabshow tabdiv':'tabdiv'}>3</div>
            </div>

        );
    }
});
