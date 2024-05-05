var countDown = new Date("July 20, 2024 00:00:00").getTime();
var y = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDown - now;

  var days = Math.floor(distance / (2000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (2000 * 60 * 60 * 24)) / (2000 * 60 * 60));
  var minutes = Math.floor((distance % (2000 * 60 * 60)) / (2000 * 60));
  var seconds = Math.floor((distance % (2000 * 60)) / 2000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(y);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 2000);
