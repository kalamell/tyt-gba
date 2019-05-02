$('.hamberger').on('click', function(){
  $('nav').toggleClass('active');
});


(function myTimer() {
  setTimeout(function() {
    var t = $('#c1');
    t.text(Number(t.text()) + 1);
    myTimer();
  }, 2000);
})();

(function myTimer() {
  setTimeout(function() {
    var t = $('#c2');
    t.text(Number(t.text()) + 1);
    myTimer();
  }, 500);
})();

var d = new Date();
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var date = document.getElementById("date");
var time = document.getElementById("time");

function getDate() {
    date.innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}

function timer() {
    setTimeout(timer, 1000);
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours <= 11 ? 'am' : 'pm';
    var strTime = [hours % 12,
                  (minutes < 10 ? "0" + minutes : minutes)
                  ].join(':') + ampm;
    time.innerHTML = strTime;
    setTimeout(timer, 1000);
}

getDate();
timer();







