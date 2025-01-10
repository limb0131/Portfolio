const navbarHeight = $(".navbar").outerHeight();
const typeText = $(".text");

$(document).ready(function () {
  // jQuery code
  //Test();
  typewriterText();
  setInterval(typewriterText, 12000);

  function Test() {
    $(".navbar-brand").click(function () {
      alert($(".navbar").outerHeight());
    });
  }

  function typewriterText() {
    setTimeout(() => {
      $(".text").text("Frontend Developer");
    }, 0);
    setTimeout(() => {
      $(".text").text("Game Developer");
    }, 4000);
    setTimeout(() => {
      $(".text").text("UI/UX Designer");
    }, 8000);
  }
});
