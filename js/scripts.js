//back end logic
function beepBoop(numberInput) {
 var numberOut = [];

for (var i=0; i<=numberInput; i++) {
      if (i.toString().includes("32")) {
        numberOut.push(" I'm sorry, Dave. I'm afraid I can't do that."); //The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
      } else if (i.toString().includes("21")) {
        numberOut.push(" Boop"); //The number 21 should be replaced with "Boop".
      } else if (i.toString().includes("13")) {
        numberOut.push(" I'm sorry, Dave. I'm afraid I can't do that."); //The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
      } else if (i.toString().includes("1")) {
        numberOut.push(" Beep!");
      } else if (i.toString().includes("2")) {
        numberOut.push(" Boop!");
      } else if (i.toString().includes("3")) {
        numberOut.push(" I'm sorry Dave. I'm afraid I can't do that.");
      } else {
        numberOut.push(' ' + i);
      }
    }
    return numberOut;
   }

//front end logic
$(document).ready(function() {
  $("form#beep").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numbersIn").val());
    var output = beepBoop(numberInput);

    $("#result").text(output);

  });
});
