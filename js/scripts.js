var name;
$(document).ready(function() {
  $("#name-form").submit(function(event) {
    name = $("#name-in").val();
    $("#name-form").hide();
    $("#test-form").show();
    event.preventDefault();
  });


});
