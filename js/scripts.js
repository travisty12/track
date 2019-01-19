var name = "";
var preferCss = false;
$(document).ready(function() {
  $("#bottom-well-teaser").click(function() {
    $("#bottom-well").fadeIn();
    $("#bottom-well-teaser").fadeOut();
  });
  $("#bottom-well").click(function() {
    $("#bottom-well").fadeOut();
    $("#bottom-well-teaser").fadeIn();
  });
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
        $("#css-text").show();
        $(".return").show();

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
        $("#java-text").show();
        if (preferCss) {
          $("#css-optional").show();
          $("#css-text").show();
        };
      });
      $("#startup").click(function() {
        $("#app-choice").fadeOut();
        $("#result").fadeIn();
        $("#ruby-text").show();
        if (preferCss) {
          $("#css-optional").show();
          $("#css-text").show();
        };
      });
    });
    $("#server").click(function() {
      $("#b-choice").fadeOut();
      $("#server-choice").fadeIn();
      $("#consistency").click(function() {
        $("#server-choice").fadeOut();
        $("#result").fadeIn();
        $("#c-sharp-text").show();
        if (preferCss) {
          $("#css-optional").show();
          $("#css-text").show();
        };
      });
      $("#versatility").click(function() {
        $("#server-choice").fadeOut();
        $("#result").fadeIn();
        $("#php-text").show();
        if (preferCss) {
          $("#css-optional").show();
          $("#css-text").show();
        };
      });
    });
    $("#result-text").text("Alrighty " + name + ", this is what I've got for you: ");
    $(".return").click(function() {
      $("#result").children("div").hide();
      $("#result-alert").show();
      $("#result").fadeOut();
      preferCss = false;
      name = "";
      $("#css-text").children("p.return").hide();
      $("#nf-holder").fadeIn();
      $("#name-in").val() = "";
    });
    event.preventDefault();
  });
});
