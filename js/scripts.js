var name = "";
var preferCss = false;
$(document).ready(function() {
  $("#page-body").children("div").toggle();
  $("body").click(function() {
    $("#questions").fadeOut();
    $("#intro").fadeOut();
  });
  $("#name-form").submit(function(event) {
    name = $("#name-in").val();
    if (name === "") {
      name = "Blanky McBlankerson"
    };
    $("#nf-holder").fadeOut();
    $("#start").fadeIn();
    $("#front").click(function() {
      $("#start").fadeOut();
      $("#f-choice").fadeIn();
      $("#layout").click(function() {
        $("#f-choice").fadeOut();
        $("#result").fadeIn();
        $("#css-text").toggle();

      });
      $("#engine").click(function() {
        $("#f-choice").fadeOut();
        $("#b-choice").fadeIn();
        preferCss = true;
      });
    });
    $("#back").click(function() {
      $("#start").fadeOut();
      $("#b-choice").fadeIn();
    });

    $("#app").click(function() {
      $("#b-choice").fadeOut();
      $("#app-choice").fadeIn();
      $("#business").click(function() {
        $("#app-choice").fadeOut();
        $("#result").fadeIn();
        $("#java-text").toggle();
      });
      $("#startup").click(function() {
        $("#app-choice").fadeOut();
        $("#result").fadeIn();
        $("#ruby-text").toggle();
      });
    });
    $("#server").click(function() {
      $("#b-choice").fadeOut();
      $("#server-choice").fadeIn();
      $("#consistency").click(function() {
        $("#server-choice").fadeOut();
        $("#result").fadeIn();
        $("#c-sharp-text").toggle();
      });
      $("#versatility").click(function() {
        $("#server-choice").fadeOut();
        $("#result").fadeIn();
        $("#php-text").toggle();
      });
    });
    if (preferCss) {
      $("#css-optional").toggle();
      $("#css-text").toggle();
    };

    $("#result-text").text("Alrighty " + name + ", this is what I've got for you: ");

    event.preventDefault();
  });


});
