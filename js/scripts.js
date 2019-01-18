var name;
var preferCss = false;
var atBack = false;
$(document).ready(function() {
  $("#page-body").children("div").toggle();
  $("#name-in").click(function() {
    $("#questions").fadeOut();
    $("#intro").fadeOut();
  });
  $("#name-form").submit(function(event) {
    name = $("#name-in").val();
    $("#nf-holder").fadeOut();
    $("#start").fadeIn();
    $("#front").click(function() {
      $("#start").fadeOut();
      $("#f-choice").fadeIn();
      $("#layout").click(function() {
        $("#f-choice").fadeOut();
        $("#css-text").fadeIn();

      });
      $("#engine").click(function() {
        $("#f-choice").fadeOut();
        $("#b-choice").fadeIn();
        preferCss = true;
        atBack = true;
      });
    });
    $("#back").click(function() {
      $("#start").fadeOut();
      $("#b-choice").fadeIn();
    });
    if (atBack) {
      $("#app").click(function() {
        $("#b-choice").fadeOut();
        $("#app-choice").fadeIn();
        $("#business").click(function() {
          $("#app-choice").fadeOut();
          $("#java-text").fadeIn();
        });
        $("#startup").click(function() {
          $("#app-choice").fadeOut();
          $("#ruby-text").fadeIn();
        });
      });
      $("#server").click(function() {
        $("#b-choice").fadeOut();
        $("#server-choice").fadeIn();
        $("#consistency").click(function() {
          $("#server-choice").fadeOut();
          $("#c-sharp-text").fadeIn();
        });
        $("#versatility").click(function() {
          $("#server-choice").fadeOut();
          $("#php-text").fadeIn();
        });
      });
      if (preferCss) {
        $("css-optional").show();
        $("#css-text").show();
      };
    };

    event.preventDefault();
  });


});
