// //back end logic
function beepBoop(numberInput) {
 var numberOut = "";


   // for (var i = numberInput; i > 0; i-=0) {
   //   if (numberInput >= 9){
   //     numberOut += "HELPP MEEEEE";
   //     numberInput -= 0;
   //     }
   //   }
     for (var i = numberInput; i > 0; i-=3) {
       if (numberInput >= 3){
         numberOut += "I'm sorry, Dave. I'm afraid I can't do that.";
         numberInput -= 3;
         }
       }
 for (var i = numberInput; i > 0; i-=2) {
   if (numberInput >= 2){
     numberOut += "Boop!";
     numberInput -= 2;
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

//working logic
// var beepBoop = function(numberInput) {
//   return true;
// };

$(document).ready(function() {
  $("form#beep").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numbersIn").val());
    var output = beepBoop(numberInput);

    $("#result").text(output);

  });
});
