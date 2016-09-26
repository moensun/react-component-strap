/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/9/26
 * Time: 13:29
 */
'use strict';
import React from "react";

import DayPanel from  "./DayPanel";

class DatePicker extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <DayPanel/>
            </div>
        );
    }
}
module.exports = DatePicker;
