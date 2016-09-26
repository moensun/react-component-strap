/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/9/26
 * Time: 13:44
 */
'use strict';
import React,{Component} from "react";

import DateMixin from "./DateMixin";
import Day from "./Day";

export default React.createClass({
    mixins: [DateMixin],
    getInitialState: function() {
        return {
            "dayArr": [],
        };
    },
    getDayArr: function () {
        let me = this;
        let startDay = new Date(this.state.currentYear,this.state.currentMonth,1);
        let weekDay = startDay.getDay();
        startDay.setDate(startDay.getDate()-weekDay);
        let days = me.getDates(startDay,42);
        return me.split(days,7);
    },
    componentWillMount(){

    },
    render() {
        let dayArr = this.getDayArr();
        console.log(dayArr);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <button type="button" className="btn btn-sm btn-default" >
                                    <span className="glyphicon glyphicon-chevron-left"></span>
                                </button>
                            </th>
                            <th colSpan="6">3</th>
                            <th>
                                <button type="button" className="btn btn-sm btn-default"  >
                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        dayArr.map( (rowItem,rowIndex)=>{
                            return (
                                <tr key={rowIndex}>
                                    <td></td>
                                    {
                                        rowItem.map( (cellItem,cellIndex)=>{
                                            return (
                                                <td key={cellIndex}><Day dayItem={cellIndex} /></td>
                                            )
                                        } )
                                    }
                                </tr>
                            )
                        } )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
});