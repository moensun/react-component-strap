/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/9/26
 * Time: 13:44
 */
'use strict';
import React,{Component} from "react";

import Day from "./Day";

class DayPanel extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Day/>
        );
    }
}
module.exports = DayPanel;