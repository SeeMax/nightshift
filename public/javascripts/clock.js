function renderTime() {
		d = new Date();
		localTime = d.getTime();
		localOffset = d.getTimezoneOffset() * 60000;
		utc = localTime + localOffset;
		offset = 8; // Bombay is UTC + 5.5 hours
		time_in_zone = utc + (3600000*offset);

    var currentTime = new Date(time_in_zone);
    var diem = "AM";
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
		
	
    if (h == 0) {
        h = 12
    } else if (h > 12) {
        h = h - 12;
        diem = "PM";
    }

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    $("#my_clock").html(h + ":" + m + ":" + s + " " + diem);
    setTimeout ('renderTime()', 1000);
}
renderTime();
