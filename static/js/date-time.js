// Get current date and time
var now = new Date();

// Get local time offset in hours
var offset = -(now.getTimezoneOffset() / 60);

// Format date and time using different options
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
var formatted = now.toLocaleString('en-US', options);

// Display date and time in nav element with id="datetime"
document.getElementById("datetime").innerHTML = formatted;