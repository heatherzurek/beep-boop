//back end logic
function beepBoop(numberInput) {
 var numberOut = [];

 for (var i = 0; i <=numberInput; i++) {
   if (i.includes("0")){
     numberOut.push("I'm sorry, Dave. I'm afraid I can't do that.");
     }
   }
 for (var i = 0; i <=numberInput; i++) {
   if (i.includes("1") {}
     numberOut.push("Boop!");
     }
   }
   for (var i = numberInput; i > 0; i-=1) {
     if (numberInput >= 1){
       numberOut += "Beep!";
     } else {

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
