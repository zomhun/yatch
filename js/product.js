$(function() {

    $(".numb").append('<div class="minus bagbtn">-</div><div class="plus bagbtn">+</div>');
  
    $(".bagbtn").on("click", function() {
  
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
  
      if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
       // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
      $button.parent().find("input").val(newVal);
  
    });
  
});


var images = document.getElementsByClassName("thumbpic");

function zoompic(event) 
  {
      event = event || window.event;
      var targetElement = event.target || event.srcElement;
  
      if(targetElement.tagName == "IMG")
      {
          picview.src = targetElement.getAttribute("src");    
      }
}


var countDownDate = new Date("Feb 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("day").innerHTML = days + " DAYS ";
  document.getElementById("hour").innerHTML = hours + " HRS ";
  document.getElementById("minute").innerHTML = minutes + " MNS";
  document.getElementById("second").innerHTML =seconds + " SEC ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "0 DAYS ";
  document.getElementById("hour").innerHTML = "0 HRS ";
  document.getElementById("minute").innerHTML = "0 MNS ";
  document.getElementById("second").innerHTML ="0 SEC ";
  }
}, 1000);