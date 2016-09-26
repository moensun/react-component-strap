/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/9/26
 * Time: 10:43
 */
'use strict';
import React from 'react';

import {MSDatepicker} from "../../src/export";

class Datepicker extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
           <div>
               <MSDatepicker/>
           </div>
        )
    }
}
module.exports = Datepicker;