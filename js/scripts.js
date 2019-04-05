//back end logic
// function beepBoop(numberInput) {
//   var numbersOut = "";
//
//   for (var i = numberInput; i > 0; i-=1) {
//     if (numberInput >= 1){
//       numbersOut += "I";
//
//   // for (var i = numberInput; i < 20; i++) {
//   //   if (numberInput >= 20 ){
//   //     numbersOut += "Hi";
//   //     console.log(numbersOut);
//     }
//   }
//   return numbersOut;
// }
var beepBoop = function(numberInput) {
  return true;
};


//front end logic
$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numberEnrty").val());
    var output = beepBoop(numberInput);

    $("#result").text(output);

  });
});
