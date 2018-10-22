$(document).ready(function() {
  $('form#mad-libs').submit(function(event) {
    alert("works");
    event.preventDefault();
    
    var inputs = ["person1", "person2", "place", "activity"];
    inputs.forEach(function(input){
      var userInput = $("input#" + input).val();
      $("#"+ input+"Output").text(userInput); 
    }) 

    $("#story").show();

  });
});
