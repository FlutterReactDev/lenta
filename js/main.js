document.addEventListener("DOMContentLoaded", function () {
  mobileMenu();
 

 

  $('button[data-target="#registration"]').on("click", function () {
    $("#login").css({ display: "none",opacity:0 });
    $("#registration").on("hide.bs.modal", function () {
      $("#login").modal("hide");
    });
  });

  $(".datepicker").datepicker({
    orientation: "bottom",
  });
  table();
  accardion();
});

function accardion() {
  const accardions = document.querySelectorAll(".feedback__accardion");
  accardions.forEach((accardion) => {
    accardion.addEventListener("click", function () {
      this.classList.toggle("feedback__accardion--active");
      const content = this.childNodes[3];
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

function mobileMenu() {
  $(".hamburger").click(function () {
    $(".mobile__menu").toggleClass("open");

    if ($(".mobile__menu").hasClass("open")) {
      $(".mobile__menu__list").show(400);
    } else {
      $(".mobile__menu__list").hide(400);
    }
  });
}

function table() {
  $("#table-everyday").DataTable({
    pageLength: 5,
    responsive: true
  });
  $("#table-everyweekend").DataTable({
    pageLength: 5,
    responsive: true
  });
  $("#table-surprise").DataTable({
    pageLength: 5,
    responsive: true
  });

  $("#table-registration-check").DataTable({
    pageLength: 5,
    responsive: true
  });
  $("#table-applications-draws").DataTable({
    pageLength: 5,
    responsive: true
  });
}
