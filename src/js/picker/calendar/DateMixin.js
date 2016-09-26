/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/9/26
 * Time: 17:03
 */
'use strict';
export default {
    getInitialState: function() {
        return {
            "DAYS_IN_MONTH": [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            "currentMonth":(this.props.currentMonth || (new Date()).getMonth() ),
            "currentYear": (this.props.currentYear || (new Date()).getFullYear() ),
            "weekDays":(this.props.weekDays || ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] ),
            "months": (this.props.months || ["January","February","March","April","May","June","July","August","September","October","November","December"])
        };
    },
    componentWillMount:function() {

    },
    getDaysInMonth: function (year,month) {
        let me = this;
        return month === 1 && year % 4 === 0 &&
        (year % 100 !== 0 || year % 400 === 0) ? 29 : me.state.DAYS_IN_MONTH[month];
    },
    getDates: function (startDate,n) {
        var dates = new Array(n), current = new Date(startDate), i = 0, date;
        while (i < n) {
            date = new Date(current);
            dates[i++] = date;
            current.setDate(current.getDate() + 1);
        }
        return dates;
    },
    split: function (arr, size) {
        let arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    }
}