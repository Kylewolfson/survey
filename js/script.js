$(document).ready(function() {
  $("form#custDetails").submit(function(event) {
    event.preventDefault();
    var fullname = $("#fullName").val();
    var foods = $("#foods").val();
    var music = $("#favoriteMusic").val();
    var sports = $("#favoriteSport").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var color = $("#color").val();

    $("#fullName1").text(fullname);
    $("#favoriteFoods1").text(foods);
    $("#favoriteMusic1").text(music);
    $("#favoriteSport1").text(sports);
    $("#favoriteFlavor1").text(flavor);
    $("#favoriteColor1").text(color);
  });
});
