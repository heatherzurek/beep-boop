//back end logic


//front end logic
$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numberEnrty").val());
    var output = beepBoop(numberInput);

    $("#result").text(output);

  });
});
