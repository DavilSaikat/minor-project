$(".signup-link").click(function () {
  $(".wrapper").addClass("animated-signin");
  $(".wrapper").removeClass("animated-signup");
  $(".wrapper").removeClass("animated-forgot");
});

$(".signin-link").click(function () {
  $(".wrapper").addClass("animated-signup");
  $(".wrapper").removeClass("animated-signin");
  $(".wrapper").removeClass("animated-forgot");
});

$(".forgot-btn").click(function () {
  $(".wrapper").addClass("animated-forgot");
  $(".wrapper").removeClass("animated-signin");
  $(".wrapper").removeClass("animated-signup");
});
