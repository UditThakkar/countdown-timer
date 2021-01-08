var countdownDate = new Date("March 29, 2021 12:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo-days").innerHTML = days + "d ";


  document.getElementById("demo-hours").innerHTML = hours + "h ";


  document.getElementById("demo-min").innerHTML = minutes + "m ";


  document.getElementById("demo-sec").innerHTML = seconds + "s ";




  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo-days").innerHTML = "EXPIRED";
    document.getElementById("demo-hours").innerHTML = "EXPIRED";
    document.getElementById("demo-min").innerHTML = "EXPIRED";
    document.getElementById("demo-sec").innerHTML = "EXPIRED";

  }
}, 1000);