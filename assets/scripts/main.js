function Datepicker(year, month) {

    //Today
    var today = new Date();

    //Last day of current month
    var last_day_of_month = new Date(year, month + 1, 0).getDate();

    //Full date of last day of month
    var date = new Date(year, month, last_day_of_month);

    //First day of the week
    var first_day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    //Last day of the week
    var last_day = new Date(date.getFullYear(), date.getMonth(), last_day_of_month).getDay();

    //Month array
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    //Structure
    var datepicker = '<tr>';
    var datepicker_body = document.getElementById('datepicker_body');
    var datepicker_info = document.getElementById('current');

    if (first_day !== 0) {
        for (var i = 1; i < first_day; i++) {
            datepicker += '<td></td>';
        }
    } else {
        for (var i = 0; i < 6; i++) {
            datepicker += '<td></td>';
        }
    }

    for (var i = 1; i <= last_day_of_month; i++) {
        if (i === new Date().getDate() && date.getFullYear() === new Date().getFullYear() && date.getMonth() === new Date().getMonth()) {
            datepicker += '<td class="today">' + i + '</td>';
        } else {
            datepicker += '<td>' + i + '</td>';
        }

        if (new Date(date.getFullYear(), date.getMonth(), i).getDay() === 0) {
            datepicker += '<tr>';
        }
    }

    for (var i = last_day; i < 7; i++) {
        datepicker += '<td></td>';
    }

    datepicker_body.innerHTML = datepicker;
    datepicker_info.innerHTML = month[date.getMonth()] + ' ' + date.getFullYear();
    datepicker_info.dataset.month = date.getMonth();
    datepicker_info.dataset.year = date.getFullYear();
}

Datepicker( new Date().getFullYear(), new Date().getMonth() );

document.getElementById('previous').onclick = function() {
    Datepicker( document.getElementById('current').dataset.year, parseInt(document.getElementById('current').dataset.month) - 1 );
}

document.getElementById('next').onclick = function() {
    Datepicker( document.getElementById('current').dataset.year, parseInt(document.getElementById('current').dataset.month) + 1 );
}
