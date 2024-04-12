$(".signup-link").click(function () {
  $(".wrapper").addClass("animated-signin");
  $(".wrapper").removeClass("animated-signup");
});

$(".signin-link").click(function () {
  $(".wrapper").addClass("animated-signup");
  $(".wrapper").removeClass("animated-signin");
});
