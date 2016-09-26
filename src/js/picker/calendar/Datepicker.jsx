/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/9/26
 * Time: 13:29
 */
'use strict';
import React from "react";

import DateMixin from "./DateMixin";
import DayPanel from  "./DayPanel";

export default React.createClass({
    getInitialState: function() {
        return {
            "currentMonth": (new Date()).getMonth(),
            "currentYear": (new Date()).getFullYear()
        };
    },
    render() {
        return (
            <div>
                <DayPanel currentMonth={this.state.currentMonth} currentYear={this.state.currentYear}/>
            </div>
        )
    }
});
