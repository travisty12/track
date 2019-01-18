var name;
$(document).ready(function() {
  $("#page-body").children("div").toggle();
  $("#name-in").click(function() {
    $("#questions").fadeOut();
    $("#intro").fadeOut();
  });
  $("#name-form").submit(function(event) {
    name = $("#name-in").val();
    $("#nf-holder").fadeOut();
    $("#second").fadeIn();
    $("#front").click(function() {
      $("#second").fadeOut();
      $("#f-choice").fadeIn();
      $("#layout").click(function() {

      });
      $("#engine").click(function() {
        
      });
    });
    $("#back").click(function() {
      $("#second").fadeOut();
      $("#b-choice").fadeIn();
    });
    event.preventDefault();
  });


});
